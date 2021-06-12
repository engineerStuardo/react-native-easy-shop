import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Cart from '../Screens/Cart/Cart';
import { CheckoutNavigator } from '../Navigators/CheckoutNavigator';

const Stack = createStackNavigator();

export const CartNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Cart'>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name='Cart'
        component={Cart}
      />
      <Stack.Screen name='Checkout' component={CheckoutNavigator} />
    </Stack.Navigator>
  );
};
