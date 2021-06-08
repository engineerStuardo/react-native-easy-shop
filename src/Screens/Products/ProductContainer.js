import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import styled from 'styled-components/native';

import { ProductList } from './ProductList';

import data from '../../../data/products.json';

const ListContainer = styled.View`
  background-color: gainsboro;
`;

export const ProductContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <ListContainer>
      <FlatList
        numColumns={2}
        data={products}
        renderItem={item => <ProductList key={item.name} product={item} />}
        keyExtractor={item => item.name}
      />
    </ListContainer>
  );
};
