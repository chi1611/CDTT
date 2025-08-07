import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigator from './index';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
