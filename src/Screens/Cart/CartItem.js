import React from 'react';
import { View, Text } from 'react-native';
import { List, Avatar, Divider } from 'react-native-paper';

export const CartItem = ({ item, isCheckout }) => {
  return (
    <View style={{ backgroundColor: 'white' }}>
      <List.Item
        title={
          <Text style={{ fontSize: 15 }}>
            {!isCheckout ? item.item.product.name : item.product.name}
          </Text>
        }
        right={() => (
          <View
            style={{
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: 18 }}>
              $ {!isCheckout ? item.item.product.price : item.product.price}
            </Text>
          </View>
        )}
        left={() => (
          <Avatar.Image
            style={{ backgroundColor: 'gainsboro' }}
            resizeMode='cover'
            size={60}
            source={{
              uri: !isCheckout
                ? item.item.product.image
                : item.product.image
                ? !isCheckout
                  ? item.item.product.image
                  : item.product.image
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTCWc8MMglc2fQjamLEgQK6BGTAituuBvAQ&usqp=CAU',
            }}
          />
        )}
      />
      <Divider />
    </View>
  );
};
