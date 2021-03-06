import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import CartIcon from '../Shared/CartIcon';

const TAB_ICON = {
  Home: 'home-sharp',
  onFocusHome: 'home-outline',
  Cart: 'cart-sharp',
  onFocusCart: 'cart-outline',
  Admin: 'settings',
  onFocusAdmin: 'settings-outline',
  User: 'md-person-sharp',
  onFocusUser: 'md-person-outline',
};

export const createScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    const iconName = focused
      ? TAB_ICON[`onFocus${route.name}`]
      : TAB_ICON[route.name];
    if (route.name === 'Cart' || route.name === 'onFocusCart') {
      return (
        <>
          <Ionicons name={iconName} size={size} color={color} />
          <CartIcon />
        </>
      );
    }
    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

export const tabBarColors = () => ({
  activeTintColor: '#Dd9d09',
  inactiveTintColor: '#979183',
  showLabel: false,
});
