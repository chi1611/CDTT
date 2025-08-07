import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SecondRoute: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>Đây là màn hình thứ hai.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SecondRoute;