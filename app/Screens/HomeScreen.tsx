import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { RootStackParamList } from '../index';
import PromoBanner from './Banners/PromoBanner';

const screenWidth = Dimensions.get('window').width;
const categories = ['Bún', 'Phở', 'Pizza', 'Burger', 'Salad', 'Sushi', 'Dessert'];
export type Food = {
  id: string;
  category: string;
  name: string;
  description: string;
  rating: number;
  price: number;
  image: string;
};
export type Popular = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};
const mockFoods = [
  {
    id: '1',
    category: 'Burger',
    name: 'Gà Nướng',
    description: '100 gr chicken + tomato + cheese + Lettuce',
    rating: 3.8,
    price: 20,
    image: 'https://cdn.tgdd.vn/2020/11/content/1-800x450-27.jpg',
  },
  {
    id: '2',
    category: 'Salad',
    name: 'Canh mướp đắng',
    description: '100 gr meat + onion + tomato + Lettuce cheese',
    rating: 4.5,
    price: 15,
    image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/469/097/products/untitled19295a1b9ecd041238d6bd.jpg?v=1667882495937',
  },
  {
    id: '3',
    category: 'Phở',
    name: 'Phở bò',
    description: 'Phở bò thơm ngon đậm đà',
    rating: 3.8,
    price: 20,
    image: 'https://image.vovworld.vn/w730/uploaded/vovworld/bpcgpivo/2020_05_08/pho-ha-noi1_kljj.jpg',
  },
  {
    id: '4',
    category: 'Pizza',
    name: 'Pizza hải sản',
    description: '100 gr pizza + onion + tomato + Lettuce cheese',
    rating: 4.5,
    price: 15,
    image: 'https://tse1.mm.bing.net/th/id/OIP.gx4jgSJRYHrolRE6LOBHlwHaEL?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    id: '5',
    category: 'Bún',
    name: 'Bún riêu cua',
    description: 'bún riêu cua đồng',
    rating: 4.2,
    price: 35,
    image: 'https://tse3.mm.bing.net/th/id/OIP.l22tmMoQA7eNG9inRkYlGgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    id: '6',
    category: 'Burger',
    name: 'Bánh mì',
    description: 'bánh mì thịt nướng',
    rating: 4.0,
    price: 15,
    image: 'https://th.bing.com/th/id/R.fd5c38e258322720b99a3f30198e91cb?rik=SOjma1ozonJavQ&pid=ImgRaw&r=0',
  },
];

const mockPopular = [
  {
    id: '4',
    name: 'Pizza Hải Sản',
    description: '5kg box of Pizza',
    price: 15,
    image: 'https://tse1.mm.bing.net/th/id/OIP.gx4jgSJRYHrolRE6LOBHlwHaEL?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    id: '5',
    name: 'Bánh mì',
    description: 'bánh mì thịt nướng',
    price: 15,
    image: 'https://th.bing.com/th/id/R.fd5c38e258322720b99a3f30198e91cb?rik=SOjma1ozonJavQ&pid=ImgRaw&r=0',
  },
  {
    id: '6',
    name: 'Bún riêu cua',
    description: 'bún riêu cua đồng',
    price: 35,
    image: 'https://tse3.mm.bing.net/th/id/OIP.l22tmMoQA7eNG9inRkYlGgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
];

const HomeScreen = () => {
const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [search, setSearch] = useState('');
  const [foodsData, setFoodsData] = useState(mockFoods);
  const [popularData, setPopularData] = useState(mockPopular);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/foods');
        const data = await res.json();
        if (Array.isArray(data)) {
          setFoodsData(data);
        }
      } catch (error) {
        console.log('Lỗi lấy foods:', error);
      }
    };

    const fetchPopular = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/popular'); // <-- chỉnh URL phù hợp
        const data = await res.json();
        if (Array.isArray(data)) {
          setPopularData(data);
        }
      } catch (error) {
        console.log('Lỗi lấy popular:', error);
      }
    };

    // Chỉ gọi API nếu cần
    // fetchFoods();
    // fetchPopular();
  }, []);

  const filteredFoods = foodsData.filter(
    (item) =>
      item.category === selectedCategory &&
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Ionicons name="location-sharp" size={20} color="#e53935" />
        <Text style={styles.locationText}>Xin chào! Linh Chi </Text>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/women/79.jpg' }}
          style={styles.profileImage}
        />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
        />
        <Ionicons name="search" size={20} style={styles.searchIcon} />
      </View>
     <PromoBanner />
 
      {/* Category Tabs */}
<TouchableOpacity
  style={{
    backgroundColor: '#f63333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8, 
    alignSelf: 'center',
    marginVertical: 8,
  }}
  onPress={() => navigation.navigate('Categories')}
>
  <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>
    Danh Mục
  </Text>
</TouchableOpacity>
      <View style={styles.categoryTabs}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryTab,
              selectedCategory === category && styles.categoryTabActive,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.categoryTextActive,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Food Cards */}
      <FlatList
        data={filteredFoods}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardDesc}>{item.description}</Text>
            <View style={styles.cardFooter}>
              <Text style={styles.cardPrice}>${item.price.toFixed(2)}</Text>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
              
            </View>
          </View>
        )}
      />

      {/* Popular Section */}
      <View style={styles.popularContainer}>
        <Text style={styles.popularTitle}>Popular Meal Menu</Text>
        <FlatList
          data={popularData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.popularItem}>
              <Image source={{ uri: item.image }} style={styles.popularImage} />
              <View style={styles.popularDetails}>
                <Text style={styles.popularName}>{item.name}</Text>
                <Text style={styles.popularDesc}>{item.description}</Text>
              </View>
              <Text style={styles.popularPrice}>${item.price}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
   wrapper: {
    height: 200,
  },
  slide: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: - 32,
    height: 200,
    borderRadius: 10,
    marginHorizontal: 16,
  },
  overlay: {
    position: 'absolute',
    top: 20,
    left: 30,
    width: '60%',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: '#fff',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#e53935',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  dot: {
    backgroundColor: '#ccc',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: '#e53935',
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 3,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 16,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  locationText: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
  },
  searchIcon: {
    color: '#888',
  },
  promoBanner: {
    marginHorizontal: 16,
    marginBottom: 24,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fce4ec',
  },
  promoImage: {
    width: '100%',
    height: 160,
  },
  promoText: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  promoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  promoSubtitle: {
    fontSize: 14,
    color: '#fff',
    marginTop: 4,
    marginBottom: 8,
  },
  buyButton: {
    backgroundColor: '#e53935',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  categoryTabs: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  categoryTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 5,
  },
  categoryTabActive: {
    backgroundColor: '#e53935',
    borderColor: '#e53935',
  },
  categoryText: {
    color: '#333',
    fontSize: 14,
  },
  categoryTextActive: {
    color: '#fff',
  },
  card: {
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginRight: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  cardDesc: {
    fontSize: 12,
    color: '#666',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  cardPrice: {
    fontSize: 14,
    color: '#e53935',
    fontWeight: 'bold',
  },
  addButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#e53935',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  popularContainer: {
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 60,
  },
  popularTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  popularItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#fafafa',
    borderRadius: 10,
    padding: 10,
  },
  popularImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  popularDetails: {
    flex: 1,
  },
  popularName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  popularDesc: {
    fontSize: 12,
    color: '#777',
  },
  popularPrice: {
    fontSize: 14,
    color: '#e53935',
    fontWeight: 'bold',
  },
});