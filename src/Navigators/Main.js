import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createScreenOptions, tabBarColors } from './app.navigator.options';
import { HomeNavigator } from './HomeNavigator';
import { CartNavigator } from './CartNavigator';
import { UserNavigator } from './UserNavigator';

const Tab = createBottomTabNavigator();

export const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={tabBarColors()}
      initialRouteName='Home'
    >
      <Tab.Screen name='Home' component={HomeNavigator} />
      <Tab.Screen name='Cart' component={CartNavigator} />
      <Tab.Screen name='Admin' component={HomeNavigator} />
      <Tab.Screen name='User' component={UserNavigator} />
    </Tab.Navigator>
  );
};
