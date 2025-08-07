import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CartTab: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Giỏ hàng của bạn</Text>
            {/* Thêm nội dung giỏ hàng ở đây */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default CartTab;