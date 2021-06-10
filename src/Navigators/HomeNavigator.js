import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ProductContainer } from '../Screens/Products/ProductContainer';

const Stack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Home' component={ProductContainer} />
    </Stack.Navigator>
  );
};
