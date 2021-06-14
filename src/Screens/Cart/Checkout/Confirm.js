import React, { useState } from 'react';
import { View, Text } from 'react-native';

export const Confirm = ({ route }) => {
  // const [confirm, setConfirm] = useState(route.params.order);

  console.log(route.params);

  return (
    <>
      <View style={{ alignSelf: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 25 }}>
          Confirm Order
        </Text>
      </View>
      <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
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
          <Text>Address:{}</Text>
          <Text>Address2:</Text>
          <Text>City:</Text>
          <Text>Zip Code:</Text>
          <Text>Country:</Text>
        </View>
      </View>
    </>
  );
};
