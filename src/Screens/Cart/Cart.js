import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Divider } from 'react-native-paper';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import { CartItem } from './CartItem';
import CartFooter from './CartFooter';
import { clearCart } from '../../Redux/cart/cartActions';

const ScrollViewStyle = styled.ScrollView`
  background-color: white;
`;

const Title = styled.Text`
  font-size: 30px;
  align-self: center;
  padding: 20px;
`;

const EmptyContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const Cart = ({ cartItems, clearCart }) => {
  let total = 0;
  cartItems.forEach(i => (total += i.product.price));
  return (
    <>
      {cartItems.length ? (
        <>
          <ScrollViewStyle>
            <View>
              <Title>Cart</Title>
              <Divider />
              {cartItems.map(item => (
                <>
                  <CartItem item={item} />
                  <Divider />
                </>
              ))}
            </View>
          </ScrollViewStyle>
          <CartFooter total={total} clearCart={clearCart} />
        </>
      ) : (
        <EmptyContainer>
          <Text>Looks like your cart is empty</Text>
          <Text>Add products to your cart to get started</Text>
        </EmptyContainer>
      )}
    </>
  );
};

const mapStateToProps = state => {
  const { cartItems } = state;
  return {
    cartItems,
  };
};

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
