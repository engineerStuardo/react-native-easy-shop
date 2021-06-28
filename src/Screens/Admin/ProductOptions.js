import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

const MenuContainer = styled(View)`
  padding: 5px;
  margin-top: 15px;
  flex-direction: row;
  justify-content: center;
`;

const MainMenu = styled(Menu)`
  position: absolute;
  top: 10;
  right: 40;
  left: 40;
`;

const ProductOptions = () => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <MenuContainer>
      <MainMenu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button
            icon='format-list-bulleted'
            mode='contained'
            onPress={openMenu}
            style={{
              backgroundColor: '#39c0ed',
              marginTop: 10,
            }}
          >
            Options
          </Button>
        }
      >
        <View
          style={{
            marginLeft: 15,
            marginRight: 15,
          }}
        >
          <Menu.Item
            onPress={() => navigation.navigate('Orders')}
            title='Orders'
            icon='shopping'
          />
          <Divider />
          <Menu.Item
            onPress={() => navigation.navigate('ProductForm')}
            title='Products'
            icon='plus'
          />
          <Divider />
          <Menu.Item
            onPress={() => navigation.navigate('Categories')}
            title='Categories'
            icon='plus'
          />
        </View>
      </MainMenu>
    </MenuContainer>
  );
};

export default ProductOptions;
