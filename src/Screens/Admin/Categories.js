import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, IconButton, Colors } from 'react-native-paper';
import styled from 'styled-components/native';

import { CategoryItem } from './CategoryItem';
import baseURL from '../../../assets/common/baseUrl';

const windowWidth = Dimensions.get('window').width;

const BottomContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: ${props => `${props.windowWidth}px`};
  padding: 10px;
  background-color: white;
`;

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    AsyncStorage.getItem('jwt')
      .then(res => setToken(res))
      .catch(error => console.log(error));

    axios
      .get(`${baseURL}categories`)
      .then(res => {
        setCategories(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={categories}
          renderItem={({ item, index }) =>
            item.name !== 'All' ? (
              <CategoryItem key={item.id} item={item} />
            ) : null
          }
          keyExtractor={item => item.id}
        />
      </View>
      <BottomContainer windowWidth={windowWidth}>
        <TextInput
          mode='outlined'
          style={{ width: 250, height: 40 }}
          label='Add Category'
          value={categoryName}
          onChangeText={text => setCategoryName(text)}
          theme={{
            colors: { primary: 'orange', underlineColor: 'transparent' },
          }}
        />
        <IconButton
          icon='plus-circle'
          color={Colors.green500}
          size={40}
          onPress={() => console.log('Pressed')}
        />
      </BottomContainer>
    </View>
  );
};

export default Categories;
