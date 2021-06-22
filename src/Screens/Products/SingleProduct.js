import React, { useState, useEffect } from 'react';
import { Image, View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import Toast from 'react-native-toast-message';

import { addToCart } from '../../Redux/cart/cartActions';

const ImageItem = styled.Image`
  width: 100%;
  height: 250px;
  margin-top: 30px;
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
  font-weight: bold;
`;

const TextPrice = styled.Text`
  font-size: 30px;
  color: orange;
`;

const TextDescription = styled.Text`
  font-size: 15px;
`;

const ButtonContainer = styled.View`
  width: 150px;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 15px;
  margin-bottom: 75px;
`;

const SingleProduct = ({ route, addItemToCart }) => {
  const [item, setItem] = useState(route.params.product);
  const [availability, setAvailability] = useState(null);

  return (
    <ScrollView>
      <View>
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
          <TextName>{item.name}</TextName>
          <TextPrice>$ {item.price}</TextPrice>
          <TextDescription>{item.description}</TextDescription>
        </TextInnerContainer>
        <ButtonContainer>
          <Button
            style={{ width: '100%' }}
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
                text2: 'Go to your cart to complete order'
              })
            }}
          >
            Add
          </Button>
        </ButtonContainer>
      </TextContainer>
    </ScrollView>
  );
};

const mapDispatchToProps = dispatch => ({
  addItemToCart: product => dispatch(addToCart({ quantity: 1, product })),
});

export default connect(null, mapDispatchToProps)(SingleProduct);