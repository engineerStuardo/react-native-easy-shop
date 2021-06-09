import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, Text } from 'react-native';
import styled from 'styled-components/native';

import { InputSearchProduct } from './InputSearchProduct';
import { CartProductList } from './CartProductList';
import { SearchProducts } from './SearchProducts';
import { ProductNotFound } from './ProductNotFound';

import data from '../../../data/products.json';

const ProductView = styled(View)`
  flex: 1;
`;

export const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [showProductCart, setShowProductCart] = useState(true);
  const searchRef = useRef();

  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
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
      <ScrollView>
        {showProductCart ? (
          <CartProductList products={products} />
        ) : productsFiltered.length > 0 ? (
          <SearchProducts productsFiltered={productsFiltered} />
        ) : (
          <ProductNotFound />
        )}
      </ScrollView>
    </ProductView>
  );
};
