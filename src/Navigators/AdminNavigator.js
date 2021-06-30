import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Orders from '../Screens/Admin/Orders';
import Products from '../Screens/Admin/Products';
import ProductForm from '../Screens/Admin/ProductForm';
import Categories from '../Screens/Admin/Categories';

const Stack = createStackNavigator();

export const AdminNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Cart'>
      <Stack.Screen
        options={{
          title: 'Products',
        }}
        name='Products'
        component={Products}
      />
      <Stack.Screen name='Categories' component={Categories} />
      <Stack.Screen name='Orders' component={Orders} />
      <Stack.Screen
        name='ProductForm'
        options={{
          title: 'Product Form',
        }}
        component={ProductForm}
      />
    </Stack.Navigator>
  );
};
