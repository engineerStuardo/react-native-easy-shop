import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styled from 'styled-components/native';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Badge, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import baseURL from '../../../assets/common/baseUrl';
import TrafficLight from '../Products/SingleProductTrafficLight';

export const OrderCard = ({
  status,
  _id,
  shippingAddress,
  shippingAddress2,
  city,
  country,
  dateOrdered,
  totalPrice,
  orderItems,
  phone,
  user,
  zip,
  isUser,
}) => {
  const [orderStatus, setOrderStatus] = useState();
  const [statusText, setStatusText] = useState();
  const [statusChange, setStatusChange] = useState('Pending');
  const [token, setToken] = useState();
  const [cardColor, setCardColor] = useState('#2ECC71');

  const navigation = useNavigation();

  const codes = [
    { name: 'Pending', code: '3' },
    { name: 'Shipped', code: '2' },
    { name: 'Delivered', code: '1' },
  ];

  const getToken = () => {
    AsyncStorage.getItem('jwt')
      .then(res => setToken(res))
      .catch(err => console.log(err));
  };

  const getStatus = () => {
    if (status === codes[0].name) {
      setOrderStatus(<TrafficLight unavailable />);
      setStatusText('Pending');
      setCardColor('#E74C3C');
    } else if (status === codes[1].name) {
      setOrderStatus(<TrafficLight limited />);
      setStatusText('Shipped');
      setCardColor('#F1C40F');
    } else {
      setOrderStatus(<TrafficLight available />);
      setStatusText('Delivered');
      setCardColor('#2ECC71');
    }
  };

  useEffect(() => {
    getStatus();
    getToken();
  }, []);

  const updateOrder = () => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const order = {
      city,
      country,
      dateOrdered,
      id: _id,
      orderItems,
      phone,
      shippingAddress,
      shippingAddress2,
      status: statusChange,
      totalPrice,
      user,
      zip,
    };

    axios
      .put(`${baseURL}orders/${_id}`, order, config)
      .then(res => {
        if (res.status === 200 || res.status === 201) {
          Toast.show({
            topOffset: 60,
            type: 'success',
            text1: 'Order Edited',
            text2: '',
          });
          setTimeout(() => {
            navigation.navigate('Products');
          }, 500);
        }
      })
      .catch(error => {
        console.log(error);
        Toast.show({
          topOffset: 60,
          type: 'error',
          text1: 'Something went wrong',
          text2: 'Please try again',
        });
      });
  };

  return (
    <View
      style={{
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 25,
        marginRight: 25,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: `${cardColor}`,
      }}
    >
      <View
        style={{
          marginTop: 15,
          marginBottom: 5,
          marginLeft: 25,
          marginRight: 25,
          padding: 30,
        }}
      >
        <Text style={{ fontWeight: 'bold' }}>Order Number: </Text>
        <Text>#{_id}</Text>
      </View>
      <View style={{ padding: 30, paddingBottom: 0 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginRight: 10, fontWeight: 'bold' }}>Status:</Text>
          <Text>{statusText}</Text>
          <Badge
            style={{ marginLeft: 10, backgroundColor: `${cardColor}` }}
          ></Badge>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontWeight: 'bold' }}>Address: </Text>
          <Text>{shippingAddress}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontWeight: 'bold' }}>City: </Text>
          <Text>{city}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontWeight: 'bold' }}>Country: </Text>
          <Text>{country}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontWeight: 'bold' }}>Date Ordered: </Text>
          <Text>{dateOrdered.split('T')[0]}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          padding: 30,
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontWeight: 'bold' }}>Price: </Text>
          <Text style={{ color: '#24bf6f' }}>$ {totalPrice}</Text>
        </View>
      </View>

      {!isUser && (
        <>
          <View
            style={{
              width: 150,
              marginLeft: 25,
              marginBottom: 25,
              backgroundColor: '#f0f5ff',
            }}
          >
            <Picker
              selectedValue={statusChange}
              onValueChange={(itemValue, itemIndex) =>
                setStatusChange(itemValue)
              }
            >
              {codes.map(item => (
                <Picker.Item
                  key={item.code}
                  label={item.name}
                  value={item.name}
                />
              ))}
            </Picker>
          </View>
          <View style={{ margin: 15, width: 150, alignSelf: 'center' }}>
            <Button
              style={{ backgroundColor: '#73a2ff' }}
              icon='update'
              mode='contained'
              onPress={updateOrder}
            >
              Update
            </Button>
          </View>
        </>
      )}
    </View>
  );
};
