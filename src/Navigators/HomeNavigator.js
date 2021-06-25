import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ProductContainer } from '../Screens/Products/ProductContainer';
import SingleProduct from '../Screens/Products/SingleProduct';

const Stack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={ProductContainer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='SingleProduct'
        component={SingleProduct}
        options={{
          title: 'Product Detail',
        }}
      />
    </Stack.Navigator>
  );
};
