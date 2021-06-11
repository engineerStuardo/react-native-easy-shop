import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { List, Avatar, Divider, Button } from 'react-native-paper';

import { connect } from 'react-redux';

import { CartItem } from './CartItem';
import { clearCart } from '../../Redux/cart/cartActions';

const Cart = ({ cartItems, clearCart }) => {
  console.log(cartItems);
  let total = 0;
  cartItems.forEach(i => (total += i.product.price));
  return (
    <>
      {cartItems.length ? (
        <>
          <ScrollView style={{ backgroundColor: 'white' }}>
            <View>
              <Text style={{ fontSize: 30, alignSelf: 'center', padding: 20 }}>
                Cart
              </Text>
              <Divider />
              {cartItems.map(item => (
                <>
                  <CartItem item={item} />
                  <Divider />
                </>
              ))}
            </View>
          </ScrollView>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'white',
            }}
          >
            <Text style={{ fontSize: 20, padding: 10, color: 'orange' }}>
              $ {total}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                margin: 10,
              }}
            >
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
                onPress={() => console.log('Pressed')}
              >
                Checkout
              </Button>
            </View>
          </View>
        </>
      ) : (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text>Looks like your cart is empty</Text>
          <Text>Add products to your cart to get started</Text>
        </View>
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
