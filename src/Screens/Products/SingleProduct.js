import React, { useState, useEffect } from 'react';
import { Image, View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import Toast from 'react-native-toast-message';

import { addToCart } from '../../Redux/cart/cartActions';
import CartFooter from '../Cart/CartFooter';

const windowWidth = Dimensions.get('window').width;

const ImageItem = styled.Image`
  width: 250px;
  height: 250px;
`;

const TextContainer = styled.View`
  align-items: center;
`;

const TextInnerContainer = styled.View`
  margin-top: 10px;
  align-items: center;
  width: 350px;
`;

const TextName = styled.Text`
  font-size: 20px;
  margin-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
  font-weight: bold;
  width: ${props => `${props.windowWidth}`};
  text-align: center;
`;

const TextPrice = styled.Text`
  font-size: 30px;
  color: orange;
`;

const TextDescription = styled.Text`
  font-size: 15px;
  flex-wrap: wrap;
  width: 300;
  text-align: justify;
`;

const ButtonContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 15px;
  margin-bottom: 75px;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 40px;
`;

const SingleProduct = ({ route, addItemToCart }) => {
  const [item, setItem] = useState(route.params.product);
  const [availability, setAvailability] = useState(null);

  return (
    <>
      <ScrollView>
        <View style={{ alignSelf: 'center' }}>
          <ImageItem
            source={{
              uri: item.image
                ? item.image
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTCWc8MMglc2fQjamLEgQK6BGTAituuBvAQ&usqp=CAU',
            }}
            resizeMode='contain'
          />
        </View>
        <TextContainer>
          <TextInnerContainer>
            <TextName windowWidth={windowWidth}>{item.name}</TextName>
            <TextName>{item.brand}</TextName>
            <TextDescription>{item.description}</TextDescription>
          </TextInnerContainer>
          {/* <ButtonContainer>
          <TextPrice>$ {item.price}</TextPrice>
          <Button
            style={{ width: 125 }}
            icon='cart-plus'
            mode='contained'
            color='#5cb85c'
            labelStyle={{ color: 'white' }}
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
        </ButtonContainer> */}
        </TextContainer>
      </ScrollView>
      <CartFooter
        total={item.price}
        singleProduct={true}
        addItemToCart={addItemToCart}
        item={item}
      />
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  addItemToCart: product => dispatch(addToCart({ quantity: 1, product })),
});

export default connect(null, mapDispatchToProps)(SingleProduct);
