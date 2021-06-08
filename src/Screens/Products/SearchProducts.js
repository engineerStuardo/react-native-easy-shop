import React from 'react';
import { View, ScrollView } from 'react-native';
import { List, Avatar } from 'react-native-paper';

export const SearchProducts = ({ productsFiltered }) => {
  console.log(productsFiltered);
  return (
    <>
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
    </>
  );
};
