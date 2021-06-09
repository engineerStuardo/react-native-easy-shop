import React from 'react';
import { List, Avatar } from 'react-native-paper';
import styled from 'styled-components/native';

const ListItemContainer = styled.View`
  padding-bottom: 30px;
`;

export const SearchProducts = ({ productsFiltered }) => {
  console.log(productsFiltered);
  return (
    <ListItemContainer>
      {productsFiltered.map(item => (
        <List.Item
          title='First Item'
          description='Item description'
          left={() => (
            <Avatar.Image
              size={100}
              source={{
                uri: 'https://www.seekpng.com/png/detail/10-103475_witch-png-transparent-image-infinity-war-scarlet-witch.png',
              }}
            />
          )}
        />
      ))}
      <List.Item
        title='First Item'
        description='Item description'
        left={() => (
          <Avatar.Image
            size={100}
            source={{
              uri: 'https://www.seekpng.com/png/detail/10-103475_witch-png-transparent-image-infinity-war-scarlet-witch.png',
            }}
          />
        )}
      />
      <List.Item
        title='ULTIMOOO Item'
        description='Item description'
        left={() => (
          <Avatar.Image
            size={100}
            source={{
              uri: 'https://www.seekpng.com/png/detail/10-103475_witch-png-transparent-image-infinity-war-scarlet-witch.png',
            }}
          />
        )}
      />
    </ListItemContainer>
  );
};
