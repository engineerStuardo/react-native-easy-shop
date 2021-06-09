import React from 'react';

import { SafeArea } from './src/Utility/safe-area-component';
import { ProductContainer } from './src/Screens/Products/ProductContainer';
import { Header } from './src/Shared/Header';

export default function App() {
  return (
    <SafeArea>
      <Header />
      <ProductContainer />
    </SafeArea>
  );
}
