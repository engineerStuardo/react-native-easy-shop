import React from 'react';
import { Text } from 'react-native';
import { Badge } from 'react-native-paper';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

const BadgeIcon = styled(Badge)`
  font-size: 10px;
  width: 20px;
  position: absolute;
  flex: 1;
  justify-content: center;
  align-items: center;
  align-content: center;
  top: 1;
  right: 25;
`;

const CartIcon = ({ cartItems }) => (
  <>
    {cartItems.length ? (
      <BadgeIcon>
        <Text>{cartItems.length}</Text>
      </BadgeIcon>
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
