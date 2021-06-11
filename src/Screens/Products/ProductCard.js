import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Button, Card } from 'react-native-paper';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/cart/cartActions';

const CardContainer = styled.View`
  width: 45%;
  margin-top: 20px;
  margin-left: 14px;
  margin-right: 2px;
`;

const CardStyling = styled(Card)`
  border-radius: 10px;
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

const ProductCard = ({ item, addItemToCart }) => {
  const { name, price, image, countInStock } = item;
  const navigation = useNavigation();

  return (
    <CardContainer>
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleProduct', { product: item })}
      >
        <CardStyling>
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
                color='#5cb85c'
                onPress={() => addItemToCart(item)}
              >
                Add
              </Button>
            </ButtonContainer>
          ) : (
            <Text>Currently Unavailable</Text>
          )}
        </CardStyling>
      </TouchableOpacity>
    </CardContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItemToCart: product => dispatch(addToCart({ quantity: 1, product })),
});

export default connect(null, mapDispatchToProps)(ProductCard);
