import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const cartData = [
  {
    id: '1',
    name: 'Chicken Burger',
    restaurant: 'Burger Factory LTD',
    price: 20,
    quantity: 1,
    image: 'https://i.imgur.com/5Aqgz7o.png',
  },
  {
    id: '2',
    name: 'Onion Pizza',
    restaurant: 'Pizza Palace',
    price: 15,
    quantity: 1,
    image: 'https://i.imgur.com/YgEF9FZ.png',
  },
  {
    id: '3',
    name: 'Spicy Shawarma',
    restaurant: 'Hot Cool Spot',
    price: 15,
    quantity: 1,
    image: 'https://i.imgur.com/nD0zjJW.png',
  },
];

const CartScreen = () => {
  const [cartItems, setCartItems] = useState(cartData);

  const updateQuantity = (id: string, change: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryCharge = 10;
  const discount = 10;
  const total = subtotal + deliveryCharge - discount;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="#ff4d4d" />
        </TouchableOpacity>
        <Text style={styles.title}>Order details</Text>
        <View style={{ width: 24 }} /> {/* Placeholder */}
      </View>

      {/* Cart List */}
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.restaurant}>{item.restaurant}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
            <View style={styles.quantity}>
              <TouchableOpacity onPress={() => updateQuantity(item.id, -1)}>
                <Ionicons name="remove-circle" size={28} color="#ff4d4d" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => updateQuantity(item.id, 1)}>
                <Ionicons name="add-circle" size={28} color="#ff4d4d" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Summary */}
      <View style={styles.summary}>
        <View style={styles.row}>
          <Text style={styles.label}>Sub-Total</Text>
          <Text style={styles.value}>${subtotal}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Delivery Charge</Text>
          <Text style={styles.value}>${deliveryCharge}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Discount</Text>
          <Text style={styles.value}>${discount}</Text>
        </View>
        <View style={styles.rowTotal}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>${total}</Text>
        </View>
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>Place My Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  list: {
    paddingHorizontal: 16,
    paddingBottom: 120,
  },

  card: {
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 12,
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },

  details: {
    flex: 1,
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  restaurant: {
    color: '#888',
    fontSize: 12,
    marginBottom: 4,
  },

  price: {
    color: '#ff4d4d',
    fontWeight: 'bold',
    fontSize: 16,
  },

  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  quantityText: {
    marginHorizontal: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },

  summary: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#ff4d4d',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },

  rowTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
  },

  label: {
    color: '#fff',
    fontSize: 14,
  },

  value: {
    color: '#fff',
    fontSize: 14,
  },

  totalLabel: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  totalValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  orderButton: {
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 12,
    alignItems: 'center',
  },

  orderButtonText: {
    color: '#ff4d4d',
    fontWeight: 'bold',
    fontSize: 16,
  },
});