import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../Screens/User/Login';
import Register from '../Screens/User/Register';
import UserProfile from '../Screens/User/UserProfile';

const Stack = createStackNavigator();

export const UserNavigator = () => {
  return (
    <Stack.Navigator headerMode='none' initialRouteName='Home'>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='UserProfile' component={UserProfile} />
    </Stack.Navigator>
  );
};
