
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import CartScreen from './Screens/CartScreen';
import CategoriesScreen from './Screens/CategoriesScreen';
import ChatScreen from './Screens/ChatScreen';
import HomeTab from './Screens/HomeTabs/HomeTab';
import ProductDetail from './Screens/ProductDetailScreen';
import ProfileScreen from './Screens/ProfileScreen';

export type RootStackParamList = {
  Home: undefined;
  Id: undefined;
  Cart: undefined;
  Chat: undefined;
  Profile: undefined;
  ProductDetail: { productId: string;
    item: {
      image: string;
      name: string;
      description: string;
      price: number;
    };};
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  HomeTab: undefined;
  Categories: undefined;
  
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
      <Stack.Navigator initialRouteName="Login"> 
      <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Home" component={HomeTab} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: true }} />
        <Stack.Screen name="Categories" component={CategoriesScreen} options={{ headerShown: true }} />
      </Stack.Navigator>
    
  );
}
