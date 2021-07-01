import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import baseURL from '../../../assets/common/baseUrl';

const Orders = () => {
  const [orderList, setOrderList] = useState();
  const [token, setToken] = useState();

  const getToken = () => {
    AsyncStorage.getItem('jwt')
      .then(tkn => {
        setToken(tkn);
      })
      .catch(err => console.log(err));
  };

  const getOrders = () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get(`${baseURL}orders`, config)
      .then(res => setOrderList(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    getOrders();
  }, [token]);

  return (
    <View>
      <FlatList
        data={orderList}
        renderItem={({ item }) => <Text>{item.shippingAddress}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Orders;
