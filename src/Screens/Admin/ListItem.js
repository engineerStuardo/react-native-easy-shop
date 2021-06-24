import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Button,
} from 'react-native';
import styled from 'styled-components/native';

const TouchableContainer = styled(TouchableOpacity)`
  flex-direction: row;
  padding: 10px;
  width: 100%;
  background-color: ${props => (props.index % 2 === 0 ? 'white' : 'gainsboro')};
  align-items: center;
`;

const ImageProduct = styled(Image)`
  border-radius: 50px;
  width: 70px;
  height: 30px;
`;

const TextStyled = styled(Text)`
  flex-wrap: wrap;
  margin: 3px;
  width: ${props => (props.bigger ? '160px' : '80px')};
`;

const ListItem = ({ image, brand, name, category, price, index }) => {
  return (
    <>
      <TouchableContainer index={index}>
        <ImageProduct
          source={{
            uri: image
              ? image
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTCWc8MMglc2fQjamLEgQK6BGTAituuBvAQ&usqp=CAU',
          }}
          resizeMode='contain'
        />
        <TextStyled bigger={true} numberOfLines={1} ellipsizeMode='tail'>
          {name}
        </TextStyled>
        <TextStyled numberOfLines={1} ellipsizeMode='tail'>
          {category.name}
        </TextStyled>
        <TextStyled>${price}</TextStyled>
      </TouchableContainer>
    </>
  );
};

export default ListItem;
