import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../index';

type ProductDetailRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

const ProductDetail: React.FC = () => {
  const navigation = useNavigation();
   const route = useRoute<ProductDetailRouteProp>();
  const { item } = route.params;

  return (
    
    <View style={styles.container}>
      <Button title="Quay lại" onPress={() => navigation.goBack()} />
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <Button title="Mua ngay" onPress={() => alert('Đã thêm vào giỏ hàng!')} />
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  image: { width: '100%', height: 240, borderRadius: 10, marginBottom: 16 },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  description: { fontSize: 16, color: '#555', marginBottom: 8 },
  price: { fontSize: 20, color: '#e53935', fontWeight: 'bold', marginBottom: 16 },
});
