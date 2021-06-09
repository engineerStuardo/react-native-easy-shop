import React from 'react';
import { Text, FlatList } from 'react-native';
import styled from 'styled-components/native';

import { ProductList } from './ProductList';

const ListContainer = styled.View`
  background-color: gainsboro;
  padding-bottom: 30px;
`;

export const CartProductList = ({ products }) => {
  return (
    <ListContainer>
      <Text>Product Container</Text>
      <FlatList
        numColumns={2}
        data={products}
        renderItem={item => <ProductList key={item.name} product={item} />}
        keyExtractor={item => item.name}
      />
    </ListContainer>
  );
};
