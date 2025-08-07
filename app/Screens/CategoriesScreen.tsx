// Screens/CategoriesScreen.tsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

type Category = {
  categoryId: number;
  categoryName: string;
};

export default function CategoriesScreen() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    axios.get('http://192.168.1.100:8080/api/categories')
      .then(res => {
        setCategories(res.data);
      })
      .catch(err => {
        console.error('Lỗi khi tải categories:', err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh mục sản phẩm</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.categoryId.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.categoryName}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  item: { padding: 10, borderBottomWidth: 1, borderColor: '#ccc' },
});
