import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FirstRoute: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>Đây là màn hình đầu tiên trong tab hồ sơ.</Text>
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

export default FirstRoute;