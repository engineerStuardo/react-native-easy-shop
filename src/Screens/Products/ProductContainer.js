import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';

import data from '../../../data/products.json';
// const data = require('../../../data/products.json');

import { ProductList } from './ProductList';

export const ProductContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <View>
      <Text>Product container</Text>
      <View style={{ marginTop: 100 }}>
        <FlatList
          horizontal
          data={products}
          renderItem={({ item }) => (
            <ProductList key={item.name} product={item} />
          )}
          keyExtractor={item => item.name}
        />
      </View>
    </View>
  );
};
