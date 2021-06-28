import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Platform } from 'react-native';
import { FormContainer } from '../../Shared/Form/FormContainer';
import { Input } from '../../Shared/Form/Input';
import Toast from 'react-native-toast-message';
import Error from '../../Shared/Error';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import baseURL from '../../../assets/common/baseUrl';

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

  return (
    <FormContainer title='Add Product'>
      <View>
        <Image source={{ uri: mainImage }} />
        <TouchableOpacity>
          <Text>IMAGE</Text>
        </TouchableOpacity>
      </View>

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
    </FormContainer>
  );
};

export default ProductForm;
