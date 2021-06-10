import React from 'react';
import { Text, FlatList } from 'react-native';
import styled from 'styled-components/native';

import { ProductList } from './ProductList';
import { Banner } from '../../Shared/Banner';
import { CategoryFilter } from './CategoryFilter';
import { ProductNotFound } from './ProductNotFound';

const ListContainer = styled.View`
  background-color: ${({ length }) => (length > 0 ? 'gainsboro' : 'white')};
  padding-bottom: 30px;
`;

const ProductNotFoundView = styled.View`
  flex: 1;
  height: 100%;
`;

export const CartProductList = ({ products, categories, changeCtg }) => {
  return (
    <ListContainer length={products.length}>
      <Banner />
      <CategoryFilter categoriesJson={categories} changeCtg={changeCtg} />
      {products.length > 0 ? (
        <FlatList
          numColumns={2}
          data={products}
          renderItem={item => <ProductList key={item.name} product={item} />}
          keyExtractor={item => item.name}
        />
      ) : (
        <ProductNotFoundView>
          <ProductNotFound />
        </ProductNotFoundView>
      )}
    </ListContainer>
  );
};
