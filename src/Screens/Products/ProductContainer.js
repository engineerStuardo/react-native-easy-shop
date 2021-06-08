import React, { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { Searchbar, Icon, TextInput } from 'react-native-paper';
import styled from 'styled-components/native';

import { ProductList } from './ProductList';
import { SearchProducts } from './SearchProducts';

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
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [showList, setShowList] = useState(true);
  const searchRef = useRef();

  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
  }, []);

  return (
    <View>
      <InputContainer>
        <TextInput
          label='Search'
          mode='outlined'
          value={search}
          ref={searchRef}
          onFocus={() => setShowList(false)}
          onChangeText={text => setSearch(text)}
          right={
            <TextInput.Icon
              name={!showList && 'alpha-x-box'}
              color={'gray'}
              size={28}
              onPress={() => {
                searchRef.current.blur();
                setShowList(true);
                setSearch('');
              }}
            />
          }
        />
      </InputContainer>
      <ScrollView>
        {showList ? (
          <ListContainer>
            <Text>Product Container</Text>
            <FlatList
              numColumns={2}
              data={products}
              renderItem={item => (
                <ProductList key={item.name} product={item} />
              )}
              keyExtractor={item => item.name}
            />
          </ListContainer>
        ) : (
          <SearchProducts productsFiltered={productsFiltered} />
        )}
      </ScrollView>
    </View>
  );
};
