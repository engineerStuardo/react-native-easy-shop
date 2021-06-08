import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { Searchbar, Icon } from 'react-native-paper';
import styled from 'styled-components/native';

import { ProductList } from './ProductList';

import data from '../../../data/products.json';

const ListContainer = styled.View`
  background-color: gainsboro;
`;

const InputContainer = styled.View`
  padding: 10px;
  background-color: #f7f7f3;
`;

export const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <View>
      <InputContainer>
        <Searchbar
          placeholder='Search'
          value={search}
          onSubmitEditing={() => null}
          onChangeText={text => setSearch(text)}
        />
      </InputContainer>
      <ScrollView>
        <ListContainer>
          <Text>Product Container</Text>
          <FlatList
            numColumns={2}
            data={products}
            renderItem={item => <ProductList key={item.name} product={item} />}
            keyExtractor={item => item.name}
          />
        </ListContainer>
      </ScrollView>
    </View>
  );
};
