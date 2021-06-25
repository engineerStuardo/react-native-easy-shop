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

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

const InnerContainer = styled(View)`
  margin: 20px;
  background-color: white;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
  elevation: 5;
`;

const CloseButton = styled(TouchableOpacity)`
  align-self: flex-end;
  position: absolute;
  top: 5px;
  right: 10px;
  width: 47px;
`;

const EditButton = styled(Button)`
  background-color: #39c0ed;
  width: 100px;
  margin-bottom: 10px;
  margin-top: 20px;
`;

const DeleteButton = styled(Button)`
  background-color: #f93154;
  width: 100px;
`;

const ListItemModal = ({ modalVisible, setModalVisible }) => {
  const navigation = useNavigation();

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <Container>
        <InnerContainer>
          <CloseButton
            underlayColor='#E8E8E8'
            onPress={() => setModalVisible(false)}
          >
            <IconButton icon='close-box' color={Colors.black500} size={25} />
          </CloseButton>
          <EditButton
            color={'#FBFBFB'}
            icon='file-document-edit'
            onPress={() => {
              navigation.navigate('ProductForm');
              setModalVisible(false);
            }}
          >
            Edit
          </EditButton>
          <DeleteButton
            color={'#FBFBFB'}
            icon='delete'
            onPress={() => {
              navigation.navigate('ProductForm');
              setModalVisible(false);
            }}
          >
            Delete
          </DeleteButton>
        </InnerContainer>
      </Container>
    </Modal>
  );
};

export default ListItemModal;
