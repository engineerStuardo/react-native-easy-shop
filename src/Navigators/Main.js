import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';

import { createScreenOptions, tabBarColors } from './app.navigator.options';
import { HomeNavigator } from './HomeNavigator';

const Tab = createBottomTabNavigator();

export const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={tabBarColors()}
      initialRouteName='Home'
    >
      <Tab.Screen name='Home' component={HomeNavigator} />
      {/* <Tab.Screen name='Cart' component={} />
      <Tab.Screen name='Admin' component={} />
      <Tab.Screen name='User' component={} /> */}
    </Tab.Navigator>
  );
};
