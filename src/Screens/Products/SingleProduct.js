import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

import { addToCart } from '../../Redux/cart/cartActions';
import CartFooter from '../Cart/CartFooter';
import TrafficLight from './SingleProductTrafficLight';

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
  const [availabilityText, setAvailabilityText] = useState('');

  useEffect(() => {
    if (item.countInStock === 0) {
      setAvailability(<TrafficLight unavailable />);
      setAvailabilityText('Unavailable');
    } else if (item.countInStock <= 5) {
      setAvailability(<TrafficLight limited />);
      setAvailabilityText('Limited Stock');
    } else {
      setAvailability(<TrafficLight available />);
      setAvailabilityText('Available');
    }
  }, []);

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
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ marginRight: 10 }}>
            <Text>Availability: {availabilityText}</Text>
          </View>
          {availability}
        </View>
        <TextContainer>
          <TextInnerContainer>
            <TextName windowWidth={windowWidth}>{item.name}</TextName>
            <TextName>{item.brand}</TextName>
            <TextDescription>{item.description}</TextDescription>
          </TextInnerContainer>
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
