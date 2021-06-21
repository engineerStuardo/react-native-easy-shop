import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const ErrorContainer = styled(View)`
  margin-bottom: 10px;
`;

const ErrorText = styled(Text)`
  color: red;
`;

export const Error = ({ message }) => {
  return (
    <ErrorContainer>
      <ErrorText>{message}</ErrorText>
    </ErrorContainer>
  );
};
