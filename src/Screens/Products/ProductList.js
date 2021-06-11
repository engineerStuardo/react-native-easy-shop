import React from 'react';
import { TouchableOpacity, View, Dimensions, Text } from 'react-native';

import ProductCard from './ProductCard';

export const ProductList = ({ product }) => {
  return <ProductCard {...product} />;
};
