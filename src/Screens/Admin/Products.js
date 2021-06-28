import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, ScrollView, Dimensions } from 'react-native';
import {
  ActivityIndicator,
  Colors,
  TextInput,
  Button,
  Menu,
  Divider,
  Provider,
} from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';

import baseURL from '../../../assets/common/baseUrl';
import ListItem from './ListItem';
import ListHeader from './ListHeader';
import ProductOptions from './ProductOptions';

const InputContainer = styled.View`
  padding: 10px;
  background-color: #f7f7f3;
`;

const InputText = styled(TextInput)`
  height: 40px;
  width: 100%;
`;

const windowWidth = Dimensions.get('window').width;

const Products = ({ navigation }) => {
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

  const searchProduct = text => {
    if (text === '') {
      setProductFilter(productList);
    }
    setProductFilter(
      productList.filter(product =>
        product.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const deleteProduct = id => {
    axios
      .delete(`${baseURL}products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(res => {
        setProductFilter(productFilter.filter(item => item.id !== id));
      })
      .catch(err => console.log(err));
  };

  return (
    <Provider>
      <View style={{ flex: 1 }}>
        <ProductOptions />
        <InputContainer>
          <InputText
            label='Search'
            mode='outlined'
            onChangeText={text => searchProduct(text)}
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
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <ActivityIndicator
              animating={true}
              color={Colors.orange800}
              size={'small'}
            />
          </View>
        ) : (
          <FlatList
            ListHeaderComponent={ListHeader}
            data={productFilter}
            renderItem={({ item, index }) => (
              <ListItem
                item={item}
                index={index}
                deleteProduct={deleteProduct}
              />
            )}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </Provider>
  );
};

export default Products;
