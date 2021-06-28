import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
  Modal,
} from 'react-native';
import { Button, IconButton, Colors } from 'react-native-paper';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import ListItemModal from './ListItemModal';

const windowWidth = Dimensions.get('window').width;

const TouchableContainer = styled(TouchableOpacity)`
  flex-direction: row;
  padding: 10px;
  width: ${props => props.windowWidth};
  background-color: ${props => (props.index % 2 === 0 ? 'white' : 'gainsboro')};
  align-items: center;
`;

const ImageProduct = styled(Image)`
  border-radius: 50px;
  width: ${props => `${props.windowWidth / 6}px`};
  height: 30px;
`;

const TextStyled = styled(Text)`
  flex-wrap: wrap;
  margin: 3px;
  width: ${props =>
    props.bigger
      ? `${props.windowWidth / 2.5}px`
      : `${props.windowWidth / 5}px`};
`;

const ListItem = ({ item, index, deleteProduct }) => {
  const { id, image, brand, name, category, price } = item;
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: windowWidth,
      }}
    >
      <ListItemModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        deleteProduct={deleteProduct}
        id={id}
      />
      <TouchableContainer
        windowWidth={windowWidth}
        index={index}
        onPress={() => navigation.navigate('SingleProduct', { product: item })}
        onLongPress={() => setModalVisible(true)}
      >
        <ImageProduct
          windowWidth={windowWidth}
          source={{
            uri: image
              ? image
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTCWc8MMglc2fQjamLEgQK6BGTAituuBvAQ&usqp=CAU',
          }}
          resizeMode='contain'
        />
        <TextStyled
          windowWidth={windowWidth}
          bigger={true}
          numberOfLines={1}
          ellipsizeMode='tail'
        >
          {name}
        </TextStyled>
        <TextStyled
          windowWidth={windowWidth}
          numberOfLines={1}
          ellipsizeMode='tail'
        >
          {category.name}
        </TextStyled>
        <TextStyled windowWidth={windowWidth}>${price}</TextStyled>
      </TouchableContainer>
    </View>
  );
};

export default ListItem;
