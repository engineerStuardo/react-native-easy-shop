import React from 'react';
import { View, Text } from 'react-native';
import { Button, Card } from 'react-native-paper';
import styled from 'styled-components/native';

const CardContainer = styled.View`
  width: 45%;
  margin-top: 40px;
  margin-left: 14px;
  margin-right: 2px;
`;

const CardCover = styled(Card.Cover)`
  background: white;
`;

const CardContent = styled(Card.Content)`
  align-self: center;
  justify-content: center;
  align-items: center;
`;

const Title = styled(Text)`
  margin-top: 10px;
  font-size: 15px;
  font-weight: bold;
`;

const Price = styled(Text)`
  color: orange;
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.View`
  align-items: center;
  align-self: center;
  width: 150px;
  margin-bottom: 30px;
`;

export const ProductCard = ({ item: { name, price, image, countInStock } }) => {
  return (
    <CardContainer>
      <Card>
        <CardCover
          resizeMode='contain'
          source={{
            uri: image
              ? image
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTCWc8MMglc2fQjamLEgQK6BGTAituuBvAQ&usqp=CAU',
          }}
        />
        <CardContent>
          <Title>
            {name.length > 15 ? `${name.substring(0, 15 - 3)}...` : name}
          </Title>
          <Price>${price}</Price>
        </CardContent>

        {countInStock > 0 ? (
          <ButtonContainer>
            <Button
              icon='cart-plus'
              mode='contained'
              color='green'
              onPress={() => console.log('Pressed')}
            >
              Add
            </Button>
          </ButtonContainer>
        ) : (
          <Text>Currently Unavailable</Text>
        )}
      </Card>
    </CardContainer>
  );
};
