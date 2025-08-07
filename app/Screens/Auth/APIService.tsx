import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosResponse } from 'axios';

const API_URL = "http://10.17.11.48:8080/api";

// Hàm lấy JWT token từ AsyncStorage
async function getToken() {
  return await AsyncStorage.getItem('jwt-token');
}

// Hàm gọi API tổng quát
export async function callApi(
  endpoint: string,
  method: string,
  data: any = null
): Promise<AxiosResponse<any>> {
  const token = await getToken();

  return axios({
    method,
    url: `${API_URL}/${endpoint}`,
    data,
    headers: {
      'Authorization': token ? `Bearer ${token}` : ''
    }
  });
}

// GET all
export function GET_ALL(endpoint: string): Promise<AxiosResponse<any>> {
  return callApi(endpoint, "GET");
}

// GET with pagination + optional categoryId
export function GET_PAGE(
  endpoint: string,
  page: number = 0,
  size: number = 10,
  categoryId: string | null = null
): Promise<AxiosResponse<any>> {
  let url = `${endpoint}?page=${page}&size=${size}`;
  if (categoryId !== null) {
    url += `&categoryId=${categoryId}`;
  }
  return callApi(url, "GET");
}

// GET by ID
export function GET_ID(
  endpoint: string,
  id: string | number
): Promise<AxiosResponse<any>> {
  return callApi(`${endpoint}/${id}`, "GET");
}

// POST (create)
export function POST_ADD(
  endpoint: string,
  data: any
): Promise<AxiosResponse<any>> {
  return callApi(endpoint, "POST", data);
}

// PUT (update)
export function PUT_EDIT(
  endpoint: string,
  data: any
): Promise<AxiosResponse<any>> {
  return callApi(endpoint, "PUT", data);
}

// DELETE
export function DELETE_ID(
  endpoint: string,
  id: string | number
): Promise<AxiosResponse<any>> {
  return callApi(`${endpoint}/${id}`, "DELETE");
}

// Lấy link ảnh
export function GET_IMG(endpoint: string, imgName: string): string {
  // Ví dụ: http://localhost:8080/api/public/products/image/abc.png
  return `${API_URL}/public/${endpoint}/image/${imgName}`;
}

// Đăng nhập
export async function POST_LOGIN(
  email: string,
  password: string
): Promise<boolean> {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    const token = response.data['jwt-token'];

    if (token) {
      // Lưu token và email vào AsyncStorage
      await AsyncStorage.setItem('jwt-token', token);
      await AsyncStorage.setItem('user-email', email);
      console.log("user-email:", email);

      // Gọi API để lấy thông tin người dùng và giỏ hàng
      const userResponse = await GET_ID('public/users/email', encodeURIComponent(email));
      const cartId = userResponse.data.cartId;
      await AsyncStorage.setItem('cart-id', String(cartId));

      return true;
    } else {
      return false;
    }
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Login error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected login error:", error);
    }
    return false;
  }
}
export async function POST_REGISTER(
  name: string,
  email: string,
  password: string
): Promise<boolean> {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      name,
      email,
      password,
    });

    return response.status === 201 || response.status === 200;
  } catch (error: any) {
    console.error("Register error:", error.response?.data || error.message);
    return false;
  }
}
export async function POST_FORGOT_PASSWORD(
  email: string
): Promise<boolean> {
  try {
    const response = await axios.post(`${API_URL}/forgot-password`, { email });
    return response.status === 200;
  } catch (error: any) {
    console.error("Forgot password error:", error.response?.data || error.message);
    return false;
  }
}
export async function POST_RESET_PASSWORD(
  token: string,
  newPassword: string
): Promise<boolean> {
  try {
    const response = await axios.post(`${API_URL}/reset-password`, {
      token,
      newPassword,
    });
    return response.status === 200;
  } catch (error: any) {
    console.error("Reset password error:", error.response?.data || error.message);
    return false;
  }
}
export async function POST_LOGOUT(): Promise<void> {
  try {
    await AsyncStorage.removeItem('jwt-token');
    await AsyncStorage.removeItem('user-email');
    await AsyncStorage.removeItem('cart-id');
  } catch (error) {
    console.error("Logout error:", error);
  }
}
export async function GET_USER_INFO(): Promise<any> {
  const email = await AsyncStorage.getItem('user-email');
  if (!email) {
    throw new Error("User not logged in");
  }
  return GET_ID('public/users/email', encodeURIComponent(email));
}
export async function GET_CART_INFO(): Promise<any> {
  const cartId = await AsyncStorage.getItem('cart-id');
  if (!cartId) {
    throw new Error("Cart not found");
  }
  return GET_ID('public/carts', cartId);
}
export async function GET_CART_ITEMS(): Promise<any> {
  const cartId = await AsyncStorage.getItem('cart-id');
  if (!cartId) {
    throw new Error("Cart not found");
  }
  return GET_ID('public/carts/items', cartId);
}
export async function POST_ADD_TO_CART(productId: string, quantity: number): Promise<any> {
  const cartId = await AsyncStorage.getItem('cart-id');
  if (!cartId) {
    throw new Error("Cart not found");
  }
  return POST_ADD(`public/carts/${cartId}/items`, { productId, quantity });
}
