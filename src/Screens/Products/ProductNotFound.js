import React from 'react';
import { Text, Image } from 'react-native';
import styled from 'styled-components/native';

const MessageContainer = styled.View`
  margin-top: 20px;
  justify-content: center;
  align-self: center;
  align-items: center;
`;

export const ProductNotFound = () => {
  return (
    <MessageContainer>
      <Image source={require('../../../assets/NoProductWasFound.png')} />
    </MessageContainer>
  );
};
