import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { SafeArea } from './src/Utility/safe-area-component';
import { ProductContainer } from './src/Screens/Products/ProductContainer';
import { Header } from './src/Shared/Header';
import { Main } from './src/Navigators/Main';

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <NavigationContainer>
      <SafeArea>
        <Header />
        <Main />
      </SafeArea>
    </NavigationContainer>
  );
}
