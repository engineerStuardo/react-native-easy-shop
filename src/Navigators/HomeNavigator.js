import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ProductContainer } from '../Screens/Products/ProductContainer';
import  SingleProduct  from '../Screens/Products/SingleProduct';

const Stack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator headerMode='none' initialRouteName='Home'>
      <Stack.Screen name='Home' component={ProductContainer} />
      <Stack.Screen name='SingleProduct' component={SingleProduct} />
    </Stack.Navigator>
  );
};
