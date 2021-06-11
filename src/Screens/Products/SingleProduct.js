import React, { useState, useEffect } from 'react';
import { Image, View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import styled from 'styled-components/native';

const ImageItem = styled.Image`
  width: 100%;
  height: 250;
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
  margin-top: 50px;
`;

export const SingleProduct = ({ route }) => {
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
            onPress={() => console.log('Pressed')}
          >
            Add
          </Button>
        </ButtonContainer>
      </TextContainer>
    </ScrollView>
  );
};
