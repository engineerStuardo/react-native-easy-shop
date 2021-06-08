import React from 'react';
import { View } from 'react-native';

import { ProductContainer } from './src/Screens/Products/ProductContainer';
import { Header } from './src/Shared/Header';

export default function App() {
  return (
    <View>
      <Header />
      <ProductContainer />
    </View>
  );
}
