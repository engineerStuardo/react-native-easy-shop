import React from 'react';
import { Text } from 'react-native';
import { Badge } from 'react-native-paper';

import { connect } from 'react-redux';

const CartIcon = ({ cartItems }) => (
  <>
    {cartItems.length ? (
      <Badge
        style={{
          fontSize: 10,
          width: 20,
          position: 'absolute',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          top: 1,
          right: 25,
        }}
      >
        <Text>{cartItems.length}</Text>
      </Badge>
    ) : null}
  </>
);

const mapStateToProps = state => {
  const { cartItems } = state;
  return {
    cartItems,
  };
};

export default connect(mapStateToProps, null)(CartIcon);
