import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux';

import { createScreenOptions, tabBarColors } from './app.navigator.options';
import { HomeNavigator } from './HomeNavigator';
import { CartNavigator } from './CartNavigator';
import { UserNavigator } from './UserNavigator';
import { AdminNavigator } from './AdminNavigator';

const Tab = createBottomTabNavigator();

const Main = ({ user }) => {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={tabBarColors()}
      initialRouteName='Home'
    >
      <Tab.Screen name='Home' component={HomeNavigator} />
      <Tab.Screen name='Cart' component={CartNavigator} />
      {user.user.isAdmin && (
        <Tab.Screen name='Admin' component={AdminNavigator} />
      )}

      <Tab.Screen name='User' component={UserNavigator} />
    </Tab.Navigator>
  );
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Main);
