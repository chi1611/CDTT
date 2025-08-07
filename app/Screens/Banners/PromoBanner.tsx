import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Swiper from "react-native-swiper";

const banners = [
  {
    title: 'Special Offer for March',
    subtitle: 'We are here with the best deserts in town.',
    image: 'https://img.freepik.com/premium-vector/asian-food-banner-set-asian-dishes_751912-142.jpg?w=826',
  },
  {
    title: 'Đặt đồ ăn dễ dàng',
    subtitle: 'Nơi nuôi dưỡng chiếc bụng đói của bạn',
    image: 'https://www.shutterstock.com/image-photo/various-asian-meals-on-rustic-600nw-1923463931.jpg',
  },
];

const PromoBanner = () => {
  return (
    <View style={styles.wrapper}>
      <Swiper
        autoplay
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        height={200}
        showsButtons={false}
      >
        {banners.map((item, index) => (
          <View key={index} style={styles.slide}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.overlay}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Buy Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </Swiper>
    </View>
  );
};
export default PromoBanner;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  searchIcon: {
    marginLeft: 10,
    color: '#888',
  },
  wrapper: {
    height: 200,
    marginBottom: 10,
  },
  slide: {
    flex: 1,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#f61919',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  dot: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  categoryTabs: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  categoryTab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#eee',
    borderRadius: 20,
    marginRight: 10,
  },
  categoryTabActive: {
    backgroundColor: '#e53935',
  },
  categoryText: {
    color: '#333',
  },
  categoryTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    width: 200,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 120,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 8,
  },
  cardDesc: {
    fontSize: 12,
    color: '#666',
    marginHorizontal: 8,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#e53935',
  },
  addButton: {
    backgroundColor: '#e53935',
    borderRadius: 20,
    padding: 6,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  popularContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  popularTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  popularItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
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
    color: '#666',
  },
  popularPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#e53935',
  },
});
