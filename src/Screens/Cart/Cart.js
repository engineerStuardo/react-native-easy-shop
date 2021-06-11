import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const Cart = ({ cartItems }) => {
  return (
    <View style={{ flex: 1 }}>
      {cartItems.map(item => (
        <Text>{item.product.name}</Text>
      ))}
    </View>
  );
};

const mapStateToProps = state => {
  const { cartItems } = state;
  return {
    cartItems,
  };
};

export default connect(mapStateToProps, null)(Cart);
