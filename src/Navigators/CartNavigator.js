import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Cart from '../Screens/Cart/Cart';

const Stack = createStackNavigator();

export const CartNavigator = () => {
  return (
    <Stack.Navigator headerMode='none' initialRouteName='Cart'>
      <Stack.Screen name='Cart' component={Cart} />
    </Stack.Navigator>
  );
};
