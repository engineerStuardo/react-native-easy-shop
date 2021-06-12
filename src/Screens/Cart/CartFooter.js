import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const CartFooterContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`;

const TotalText = styled(Text)`
  font-size: 20px;
  padding: 10px;
  color: orange;
`;

const ButtonsContainer = styled(View)`
  flex-direction: row;
  margin: 10px;
`;

const CartFooter = ({ total, clearCart }) => {
  const navigation = useNavigation();

  return (
    <CartFooterContainer>
      <TotalText>$ {total.toFixed(2)}</TotalText>
      <ButtonsContainer>
        <Button
          style={{ marginRight: 10 }}
          color='#428bca'
          mode='contained'
          onPress={() => clearCart()}
        >
          Clear
        </Button>
        <Button
          color='#428bca'
          mode='contained'
          onPress={() => navigation.navigate('Checkout')}
        >
          Checkout
        </Button>
      </ButtonsContainer>
    </CartFooterContainer>
  );
};

export default CartFooter;
