import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Button,
  Dimensions,
} from 'react-native';
import styled from 'styled-components/native';

const windowWidth = Dimensions.get('window').width;

const TouchableContainer = styled(TouchableOpacity)`
  flex-direction: row;
  padding: 10px;
  width: ${props => props.windowWidth};
  background-color: ${props => (props.index % 2 === 0 ? 'white' : 'gainsboro')};
  align-items: center;
`;

const ImageProduct = styled(Image)`
  border-radius: 50px;
  width: ${props => `${props.windowWidth / 6}px`};
  height: 30px;
`;

const TextStyled = styled(Text)`
  flex-wrap: wrap;
  margin: 3px;
  width: ${props =>
    props.bigger
      ? `${props.windowWidth / 2.5}px`
      : `${props.windowWidth / 5}px`};
`;

const ListItem = ({ image, brand, name, category, price, index }) => {
  return (
    <View style={{ width: windowWidth }}>
      <TouchableContainer windowWidth={windowWidth} index={index}>
        <ImageProduct
          windowWidth={windowWidth}
          source={{
            uri: image
              ? image
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTCWc8MMglc2fQjamLEgQK6BGTAituuBvAQ&usqp=CAU',
          }}
          resizeMode='contain'
        />
        <TextStyled
          windowWidth={windowWidth}
          bigger={true}
          numberOfLines={1}
          ellipsizeMode='tail'
        >
          {name}
        </TextStyled>
        <TextStyled
          windowWidth={windowWidth}
          numberOfLines={1}
          ellipsizeMode='tail'
        >
          {category.name}
        </TextStyled>
        <TextStyled windowWidth={windowWidth}>${price}</TextStyled>
      </TouchableContainer>
    </View>
  );
};

export default ListItem;
