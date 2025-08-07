import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrdersScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Order Screen</Text>
            {/* Add your Orders list or UI here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default OrdersScreen;