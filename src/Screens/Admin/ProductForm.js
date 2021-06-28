import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Platform } from 'react-native';
import { FormContainer } from '../../Shared/Form/FormContainer';
import { Input } from '../../Shared/Form/Input';
import Toast from 'react-native-toast-message';
import Error from '../../Shared/Error';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';
import { Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { Avatar } from 'react-native-paper';

import baseURL from '../../../assets/common/baseUrl';

const DropdownContainer = styled(View)`
  width: 80%;
  height: 50px;
  background-color: white;
  margin: 10px;
  padding: 10px;
  border-width: 2px;
  border-color: orange;
  align-self: center;
  border-radius: 20px;
  justify-content: center;
`;

const ConfirmButtonContainer = styled(View)`
  width: 200px;
  align-self: center;
  margin-bottom: 80px;
`;

const ConfirmButton = styled(Button)`
  border-radius: 20px;
  background-color: #5cb85c;
  padding: 5px;
`;

const ImageContainer = styled(View)`
  align-self: center;
  margin-top: 10px;
  margin-bottom: 25px;
`;

const ProductForm = () => {
  const [brand, setBrand] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [mainImage, setMainImage] = useState();
  const [category, setCategory] = useState();
  const [categories, setCategories] = useState([]);
  const [token, setToken] = useState();
  const [error, setError] = useState();
  const [countInStock, setCountInStock] = useState();
  const [rating, setRating] = useState();
  const [isFeatured, setIsFeatured] = useState(false);
  const [richDescription, setRichDescription] = useState();
  const [numReviews, setNumReviews] = useState(0);
  const [item, setItem] = useState(null);

  const loadCategories = () => {
    axios
      .get(`${baseURL}categories`)
      .then(res => {
        const data = res.data.filter(item => item.name !== 'All');
        setCategories(data);
      })
      .catch(error => console.log(error));
  };

  const imagePickerPermissions = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Toast.show({
          topOffset: 60,
          type: 'info',
          text1: 'Sorry, we need camera roll permissions to make this work!',
        });
      }
    }
  };

  useEffect(() => {
    loadCategories();
    imagePickerPermissions();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setMainImage(result.uri);
      setImage(result.uri);
    }
  };

  return (
    <FormContainer title='Add Product'>
      <ImageContainer>
        <Avatar.Image
          size={200}
          source={{ uri: mainImage }}
          style={{ backgroundColor: 'white' }}
        />
        <TouchableOpacity
          style={{ position: 'absolute', top: 150, right: 5 }}
          onPress={pickImage}
        >
          <Avatar.Icon
            size={35}
            icon='camera'
            style={{ backgroundColor: 'orange' }}
            color={'white'}
          />
        </TouchableOpacity>
      </ImageContainer>
      <Input
        placeholder={'Brand'}
        name={'brand'}
        id={'brand'}
        value={brand}
        onChangeText={text => setBrand(text)}
      />
      <Input
        placeholder={'Name'}
        name={'name'}
        id={'name'}
        value={name}
        onChangeText={text => setName(text)}
      />
      <Input
        placeholder={'Price'}
        name={'price'}
        id={'price'}
        value={price}
        keyboardType={'numeric'}
        onChangeText={text => setPrice(text)}
      />
      <Input
        placeholder={'Stock'}
        name={'stock'}
        id={'stock'}
        value={countInStock}
        keyboardType={'numeric'}
        onChangeText={text => setCountInStock(text)}
      />
      <Input
        placeholder={'Description'}
        name={'description'}
        id={'description'}
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <DropdownContainer>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
        >
          {categories.map(item => (
            <Picker.Item key={item._id} label={item.name} value={item.name} />
          ))}
        </Picker>
      </DropdownContainer>
      {error ? <Error message={error} /> : null}
      <ConfirmButtonContainer>
        <ConfirmButton icon='plus-box' mode='contained' onPress={() => {}}>
          Confirm
        </ConfirmButton>
      </ConfirmButtonContainer>
    </FormContainer>
  );
};

export default ProductForm;
