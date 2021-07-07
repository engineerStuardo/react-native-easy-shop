import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, ActivityIndicator, Colors } from 'react-native-paper';

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
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}
    >
      {loading ? (
        <View>
          <ActivityIndicator
            animating={true}
            color={Colors.orange800}
            size={50}
          />
        </View>
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
