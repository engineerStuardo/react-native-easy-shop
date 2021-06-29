import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { FormContainer } from '../../Shared/Form/FormContainer';
import { Input } from '../../Shared/Form/Input';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';
import { Button, ActivityIndicator, Colors } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import mime from 'mime';

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
  const [brand, setBrand] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [mainImage, setMainImage] = useState();
  const [category, setCategory] = useState('5f15d54cf3a046427a1c26e3');
  const [categories, setCategories] = useState([]);
  const [token, setToken] = useState();
  const [countInStock, setCountInStock] = useState('');
  const [rating, setRating] = useState(5);
  const [isFeatured, setIsFeatured] = useState(false);
  const [richDescription, setRichDescription] = useState('sdf');
  const [numReviews, setNumReviews] = useState(0);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const getToken = () => {
    AsyncStorage.getItem('jwt')
      .then(token => {
        setToken(token);
      })
      .catch(err => console.log(err));
  };

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
    getToken();
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

  const addProduct = () => {
    setLoading(true);
    if (
      image === '' ||
      name === '' ||
      brand === '' ||
      price === '' ||
      description === '' ||
      category === '' ||
      countInStock === ''
    ) {
      Toast.show({
        topOffset: 60,
        type: 'error',
        text1: 'Please fill the form correctly',
      });
      setLoading(false);
      return;
    }

    if (countInStock > 255) {
      Toast.show({
        topOffset: 60,
        type: 'error',
        text1: 'Maximum STOCK value is 255',
      });
      setLoading(false);
      setCountInStock('');
      return;
    }

    let formData = new FormData();
    const newImageUri = 'file:///' + image.split('file:/').join('');
    formData.append('image', {
      uri: newImageUri,
      type: mime.getType(newImageUri),
      name: newImageUri.split('/').pop(),
    });
    formData.append('name', name);
    formData.append('brand', brand);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('countInStock', countInStock);
    formData.append('richDescription', richDescription);
    formData.append('rating', rating);
    formData.append('numReviews', numReviews);
    formData.append('isFeatured', isFeatured);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post(`${baseURL}products`, formData, config)
      .then(res => {
        if (res.status === 200 || res.status === 201) {
          Toast.show({
            topOffset: 60,
            type: 'success',
            text1: 'New product added',
            text2: '',
          });
          setTimeout(() => {
            setLoading(false);
            navigation.navigate('Products');
          }, 500);
        }
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
        Toast.show({
          topOffset: 60,
          type: 'error',
          text1: 'Something went wrog',
          text2: 'Please try again',
        });
      });
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
            <Picker.Item key={item._id} label={item.name} value={item._id} />
          ))}
        </Picker>
      </DropdownContainer>
      {loading ? (
        <ConfirmButtonContainer>
          <ActivityIndicator
            animating={true}
            color={Colors.orange800}
            size={'small'}
          />
        </ConfirmButtonContainer>
      ) : (
        <ConfirmButtonContainer>
          <ConfirmButton icon='plus-box' mode='contained' onPress={addProduct}>
            Confirm
          </ConfirmButton>
        </ConfirmButtonContainer>
      )}
    </FormContainer>
  );
};

export default ProductForm;
