import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, ScrollView, Text } from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import { ActivityIndicator, Colors } from 'react-native-paper';

import { InputSearchProduct } from './InputSearchProduct';
import { CartProductList } from './CartProductList';
import { SearchProducts } from './SearchProducts';
import { ProductNotFound } from './ProductNotFound';
import baseURL from '../../../assets/common/baseUrl';

const ProductView = styled(View)`
  flex: 1;
`;

const ActivityIndicatorContainer = styled(View)`
  flex: 1;
  justify-content: center;
`;

export const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [showProductCart, setShowProductCart] = useState(true);
  const [categories, setCategories] = useState([]);
  const [productsCtg, setProductsCtg] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchRef = useRef();

  const requestProductsAPI = async () => {
    try {
      const res = await axios.get(`${baseURL}products`);
      setProducts(res.data);
      setProductsFiltered(res.data);
      setProductsCtg(res.data);
      setLoading(false);
    } catch (error) {
      console.log(`Api call error: ${error}`);
    }
  };

  const requestCategoriesAPI = async () => {
    try {
      const res = await axios.get(`${baseURL}categories`);
      const result = res.data.sort((a, b) => a.name.localeCompare(b.name));
      setCategories(result);
    } catch (error) {
      console.log(`Api call error: ${error}`);
    }
  };

  useFocusEffect(
    useCallback(() => {
      requestCategoriesAPI();
      requestProductsAPI();
    }, [])
  );

  const searchProduct = (text = '') => {
    setProductsFiltered(
      products.filter(item =>
        item.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  useEffect(() => {
    searchProduct();
  }, [showProductCart]);

  const changeCtg = (ctg, index = 0) => {
    index === 0
      ? setProductsCtg(products)
      : setProductsCtg(products.filter(item => item.category._id === ctg));
  };

  return (
    <>
      {loading ? (
        <ActivityIndicatorContainer>
          <ActivityIndicator
            animating={true}
            size={50}
            color={Colors.orange800}
          />
        </ActivityIndicatorContainer>
      ) : (
        <ProductView>
          <InputSearchProduct
            search={search}
            setSearch={setSearch}
            searchRef={searchRef}
            setShowProductCart={setShowProductCart}
            showProductCart={showProductCart}
            searchProduct={searchProduct}
          />
          <ScrollView keyboardShouldPersistTaps='handled'>
            {showProductCart ? (
              <CartProductList
                products={productsCtg}
                categories={categories}
                changeCtg={changeCtg}
              />
            ) : productsFiltered.length > 0 ? (
              <SearchProducts productsFiltered={productsFiltered} />
            ) : (
              <ProductNotFound />
            )}
          </ScrollView>
        </ProductView>
      )}
    </>
  );
};
