import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FirstRoute: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>Đây là màn hình đầu tiên của Chat Tabs.</Text>
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
});

export default FirstRoute;