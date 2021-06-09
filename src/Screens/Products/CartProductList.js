import React from 'react';
import { Text, FlatList } from 'react-native';
import styled from 'styled-components/native';

import { ProductList } from './ProductList';
import { Banner } from '../../Shared/Banner';
import { CategoryFilter } from './CategoryFilter';

const ListContainer = styled.View`
  background-color: gainsboro;
  padding-bottom: 30px;
`;

export const CartProductList = ({
  products,
  categories,
  changeCtg,
  productsCtg,
}) => {
  return (
    <ListContainer>
      <Banner />
      <CategoryFilter
        categoriesJson={categories}
        changeCtg={changeCtg}
        productsCtg={productsCtg}
      />
      <FlatList
        numColumns={2}
        data={products}
        renderItem={item => <ProductList key={item.name} product={item} />}
        keyExtractor={item => item.name}
      />
    </ListContainer>
  );
};
