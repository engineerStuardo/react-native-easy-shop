import React from 'react';
import { TouchableOpacity } from 'react-native';
import { List, Avatar, Divider } from 'react-native-paper';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const ListItemContainer = styled.View`
  padding-bottom: 30px;
`;

export const SearchProducts = ({ productsFiltered }) => {
  const navigation = useNavigation();

  return (
    <ListItemContainer>
      {productsFiltered.map(item => (
        <>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SingleProduct', { product: item })
            }
          >
            <List.Item
              title={item.name}
              description={item.description}
              left={() => (
                <Avatar.Image
                  style={{ backgroundColor: 'gainsboro' }}
                  resizeMode='cover'
                  size={100}
                  source={{
                    uri: item.image
                      ? item.image
                      : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTCWc8MMglc2fQjamLEgQK6BGTAituuBvAQ&usqp=CAU',
                  }}
                />
              )}
            />
          </TouchableOpacity>
          <Divider />
        </>
      ))}
    </ListItemContainer>
  );
};
