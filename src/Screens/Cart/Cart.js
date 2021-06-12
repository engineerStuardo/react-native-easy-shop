import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Ionicons } from '@expo/vector-icons';

import { CartItem } from './CartItem';
import CartFooter from './CartFooter';
import { clearCart, removeFromCart } from '../../Redux/cart/cartActions';

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

const HiddenContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  flex-direction: row;
`;

const HiddenButton = styled(TouchableOpacity)`
  background-color: #ff5c57;
  justify-content: center;
  align-items: flex-end;
  padding-right: 25px;
  height: 70px;
  width: 70px;
`;

const Cart = ({ cartItems, clearCart, deleteItem }) => {
  let total = 0;
  cartItems.forEach(i => (total += i.product.price));

  return (
    <>
      {cartItems.length ? (
        <>
          <ScrollViewStyle>
            <View>
              <Title>Cart</Title>
              <Text style={{ alignSelf: 'center' }}>
                (Swipe right to left to delete)
              </Text>
              <Divider />
              <SwipeListView
                data={cartItems}
                renderItem={item => <CartItem item={item} />}
                renderHiddenItem={data => (
                  <HiddenContainer>
                    <HiddenButton onPress={() => deleteItem(data.item)}>
                      <Ionicons
                        name='md-trash-outline'
                        size={30}
                        color='white'
                      />
                    </HiddenButton>
                  </HiddenContainer>
                )}
                disableRightSwipe={true}
                previewOpenDelay={3000}
                friction={1000}
                tension={40}
                leftOpenValue={75}
                stopLeftSwipe={75}
                rightOpenValue={-75}
              />
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
  deleteItem: item => dispatch(removeFromCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
