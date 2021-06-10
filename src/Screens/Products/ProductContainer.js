import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, Text } from 'react-native';
import styled from 'styled-components/native';

import { InputSearchProduct } from './InputSearchProduct';
import { CartProductList } from './CartProductList';
import { SearchProducts } from './SearchProducts';
import { ProductNotFound } from './ProductNotFound';

import data from '../../../data/products.json';
import categoriesJson from '../../../data/categories.json';

const ProductView = styled(View)`
  flex: 1;
`;

export const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [showProductCart, setShowProductCart] = useState(true);
  const [categories, setCategories] = useState([]);
  const [productsCtg, setProductsCtg] = useState([]);
  const searchRef = useRef();

  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
    setCategories(categoriesJson);
    setProductsCtg(data);
  }, []);

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
      : setProductsCtg(
          products.filter(item => item.category.$oid === ctg.$oid)
        );
  };

  return (
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
  );
};
