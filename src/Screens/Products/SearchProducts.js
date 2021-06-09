import React from 'react';
import { List, Avatar } from 'react-native-paper';
import styled from 'styled-components/native';

const ListItemContainer = styled.View`
  padding-bottom: 30px;
`;

export const SearchProducts = ({ productsFiltered }) => {
  return (
    <ListItemContainer>
      {productsFiltered.map(item => (
        <List.Item
          key={item.name}
          title={item.name}
          description={item.description}
          left={() => (
            <Avatar.Image
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
      ))}
    </ListItemContainer>
  );
};
