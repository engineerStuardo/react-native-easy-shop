import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { ActivityIndicator, Colors, TextInput } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';

import baseURL from '../../../assets/common/baseUrl';
import ListItem from './ListItem';

const InputContainer = styled.View`
  padding: 10px;
  background-color: #f7f7f3;
`;

const InputText = styled(TextInput)`
  height: 40px;
  width: 100%;
`;

const Products = () => {
  const [productList, setProductList] = useState();
  const [productFilter, setProductFilter] = useState();
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState();

  const getToken = () => {
    AsyncStorage.getItem('jwt')
      .then(token => {
        setToken(token);
      })
      .catch(err => console.log(err));
  };

  const getProducts = () => {
    axios.get(`${baseURL}products`).then(res => {
      setProductList(res.data);
      setProductFilter(res.data);
      setLoading(false);
    });
  };

  useFocusEffect(
    useCallback(() => {
      getToken();
      getProducts();
    }, [])
  );

  return (
    <View style={{ flex: 1 }}>
      <InputContainer>
        <InputText
          label='Search'
          mode='outlined'
          // value={search}
          // ref={searchRef}
          // onFocus={() => setShowProductCart(false)}

          left={
            <TextInput.Icon
              style={{ marginTop: 15 }}
              name='magnify'
              color={'gray'}
            />
          }
        />
      </InputContainer>
      {loading ? (
        <ActivityIndicator
          animating={true}
          color={Colors.orange800}
          size={'small'}
        />
      ) : (
        <FlatList
          data={productFilter}
          renderItem={({ item, index }) => <ListItem {...item} index={index} />}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default Products;
