import React from 'react';
import { TouchableOpacity, View, Dimensions } from 'react-native';

import { ProductCard } from './ProductCard';

const { width } = Dimensions.get('window');

export const ProductList = ({ product }) => {
  return (
    <TouchableOpacity style={{ width: '50%' }}>
      <View style={{ width: width / 2, backgroundColor: 'gainsboro' }}>
        <ProductCard {...product} />
      </View>
    </TouchableOpacity>
  );
};
