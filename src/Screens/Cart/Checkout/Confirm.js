import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

export const Confirm = ({ route }) => {
  const confirm = route.params;

  return (
    <>
      <View style={{ alignSelf: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 25 }}>
          Confirm Order
        </Text>
      </View>
      {confirm ? (
        <View
          style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}
        >
          <View
            style={{
              width: 280,
              borderWidth: 1,
              borderColor: 'orange',
              marginTop: 25,
              borderRadius: 20,
              padding: 20,
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
          </View>
        </View>
      ) : (
        <View style={{ alignSelf: 'center' }}>
          <Text>You need to confirm Shipping and Payment</Text>
        </View>
      )}
    </>
  );
};
