import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, IconButton, Colors } from 'react-native-paper';
import styled from 'styled-components/native';

const CategoryContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  background-color: white;
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
  elevation: 5;
`;

export const CategoryItem = ({ item }) => (
  <CategoryContainer>
    <Text>{item.name}</Text>
    <IconButton
      icon='delete-circle-outline'
      color={Colors.red500}
      size={30}
      onPress={() => console.log('Pressed')}
    />
  </CategoryContainer>
);
