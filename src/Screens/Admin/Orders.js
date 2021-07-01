import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import baseURL from '../../../assets/common/baseUrl';
import { OrderCard } from './OrderCard';

const Orders = () => {
  const [orderList, setOrderList] = useState();
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(true);

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
      .then(res => {
        setOrderList(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    setLoading(true);
    getOrders();
  }, [token]);

  return (
    <View>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={orderList}
          renderItem={({ item }) => <OrderCard {...item} />}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default Orders;
