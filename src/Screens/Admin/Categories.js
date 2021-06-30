import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, IconButton, Colors } from 'react-native-paper';
import styled from 'styled-components/native';
import Toast from 'react-native-toast-message';

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

  const getToken = () => {
    AsyncStorage.getItem('jwt')
      .then(res => setToken(res))
      .catch(error => console.log(error));
  };

  const getCategories = () => {
    axios
      .get(`${baseURL}categories`)
      .then(res => {
        setCategories(res.data);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getToken();
    getCategories();
  }, []);

  const addCategory = () => {
    if (!categoryName) {
      Toast.show({
        topOffset: 60,
        type: 'error',
        text1: 'Please enter a category name',
        text2: 'Please try again',
      });
      return;
    }
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const newCategory = { name: categoryName };
    axios
      .post(`${baseURL}categories`, newCategory, config)
      .then(res => {
        setCategories([...categories, res.data]);
        if (res.status === 200 || res.status === 201) {
          Toast.show({
            topOffset: 60,
            type: 'success',
            text1: 'New category added',
            text2: '',
          });
        }
        setCategoryName('');
      })
      .catch(error => {
        console.log(error);
        Toast.show({
          topOffset: 60,
          type: 'error',
          text1: 'Something went wrong',
          text2: 'Please try again',
        });
      });
  };

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
          onPress={addCategory}
        />
      </BottomContainer>
    </View>
  );
};

export default Categories;
