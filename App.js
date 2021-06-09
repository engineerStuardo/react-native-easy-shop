import React from 'react';
import { LogBox } from 'react-native';

import { SafeArea } from './src/Utility/safe-area-component';
import { ProductContainer } from './src/Screens/Products/ProductContainer';
import { Header } from './src/Shared/Header';

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <SafeArea>
      <Header />
      <ProductContainer />
    </SafeArea>
  );
}
