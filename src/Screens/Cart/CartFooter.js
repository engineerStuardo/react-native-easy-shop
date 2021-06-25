import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const CartFooterContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => (props.singleProduct ? 'transparent' : 'white')};
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

const CartFooter = ({
  total,
  clearCart,
  singleProduct,
  addItemToCart,
  item,
}) => {
  const navigation = useNavigation();

  return (
    <CartFooterContainer singleProduct={singleProduct}>
      <TotalText>$ {total.toFixed(2)}</TotalText>
      <ButtonsContainer>
        {clearCart && (
          <Button
            style={{ marginRight: 10, backgroundColor: '#f93154' }}
            mode='contained'
            onPress={() => clearCart()}
          >
            Clear
          </Button>
        )}
        {singleProduct ? (
          <Button
            style={{ width: 125 }}
            icon='cart-plus'
            mode='contained'
            color='#5cb85c'
            labelStyle={{ color: 'white' }}
            disabled={item.countInStock === 0 ? true : false}
            onPress={() => {
              addItemToCart(item);
              Toast.show({
                topOffset: 60,
                type: 'success',
                text1: `Added to Cart: ${item.name}`,
                text2: 'Go to your cart to complete order',
              });
            }}
          >
            Add
          </Button>
        ) : (
          <Button
            style={{ backgroundColor: '#5cb85c' }}
            mode='contained'
            onPress={() => navigation.navigate('Checkout')}
          >
            Checkout
          </Button>
        )}
      </ButtonsContainer>
    </CartFooterContainer>
  );
};

export default CartFooter;
