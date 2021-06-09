import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import { InputSearchProduct } from './InputSearchProduct';
import { CartProductList } from './CartProductList';
import { SearchProducts } from './SearchProducts';

import data from '../../../data/products.json';

const ProductView = styled(View)`
  flex: 1;
`;

export const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [showList, setShowList] = useState(true);
  const searchRef = useRef();

  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
  }, []);

  return (
    <ProductView>
      <InputSearchProduct
        search={search}
        setSearch={setSearch}
        searchRef={searchRef}
        setShowList={setShowList}
        showList={showList}
      />
      <ScrollView>
        {showList ? (
          <CartProductList products={products} />
        ) : (
          <SearchProducts productsFiltered={productsFiltered} />
        )}
      </ScrollView>
    </ProductView>
  );
};
