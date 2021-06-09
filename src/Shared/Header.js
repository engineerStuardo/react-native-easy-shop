import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { Avatar } from 'react-native-paper';
import styled from 'styled-components/native';

const ImageContainer = styled.SafeAreaView`
  margin-top: 20px;
  margin-bottom: 10px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const Header = () => (
  <ImageContainer>
    <Avatar.Image size={55} source={require('../../assets/Logo.png')} />
    <Text>Easy Shop</Text>
  </ImageContainer>
);
