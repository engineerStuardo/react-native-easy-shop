import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { List, Avatar, Divider, Button, TextInput } from 'react-native-paper';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { CartItem } from '../CartItem';
import { clearCart } from '../../../Redux/cart/cartActions';
import baseURL from '../../../../assets/common/baseUrl';

const PlaceOrderButton = styled(Button)`
  border-radius: 20px;
  background-color: #39c0ed;
  padding: 5px;
`;

const Confirm = ({ route, clearCart, navigation }) => {
  const [token, setToken] = useState();

  const confirm = route.params;

  useEffect(() => {
    AsyncStorage.getItem('jwt').then(value => setToken(value));
  }, []);

  const confirmOrder = () => {
    const order = confirm.order.order;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post(`${baseURL}orders`, order, config)
      .then(res => {
        if (res.status === 200 || res.status === 201) {
          Toast.show({
            topOffset: 60,
            type: 'success',
            text1: 'Order Completed',
            text2: '',
          });
          setTimeout(() => {
            clearCart();
            navigation.navigate('Cart');
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
    <>
      <View style={{ alignSelf: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 25 }}>
          Confirm Order
        </Text>
      </View>
      {confirm ? (
        <ScrollView>
          <View
            style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}
          >
            <View
              style={{
                width: 350,
                borderWidth: 1,
                borderColor: 'orange',
                marginTop: 25,
                borderRadius: 20,
                padding: 20,
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  margin: 15,
                  alignSelf: 'center',
                }}
              >
                Shipping to:{' '}
              </Text>
              <Text>Address: {confirm.order.order.shippingAddress}</Text>
              <Text>Address2: {confirm.order.order.shippingAddress2}</Text>
              <Text>City: {confirm.order.order.city}</Text>
              <Text>Zip Code: {confirm.order.order.zip}</Text>
              <Text>Country: {confirm.order.order.country}</Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  margin: 15,
                  alignSelf: 'center',
                }}
              >
                Items:{' '}
              </Text>
              <Divider />
              {confirm &&
                confirm.order.order.orderItems.map((item, index) => (
                  <CartItem item={item} isCheckout />
                ))}
            </View>
            <View style={{ marginBottom: 40 }}>
              <PlaceOrderButton
                icon='calendar-check'
                mode='contained'
                onPress={() => confirmOrder()}
              >
                Place order
              </PlaceOrderButton>
            </View>
          </View>
        </ScrollView>
      ) : (
        <View style={{ alignSelf: 'center' }}>
          <Text>You need to confirm Shipping and Payment</Text>
        </View>
      )}
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(null, mapDispatchToProps)(Confirm);
