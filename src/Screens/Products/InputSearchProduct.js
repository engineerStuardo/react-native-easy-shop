import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';

const InputContainer = styled.View`
  padding: 10px;
  background-color: #f7f7f3;
`;

const InputText = styled(TextInput)`
  height: 40px;
  width: 100%;
`;

export const InputSearchProduct = ({
  search,
  setSearch,
  searchRef,
  showProductCart,
  setShowProductCart,
  searchProduct,
}) => {
  const [blur, setBlur] = useState(false);

  return (
    <InputContainer>
      <InputText
        label='Search'
        mode='outlined'
        value={search}
        ref={searchRef}
        onFocus={() => setShowProductCart(false)}
        onBlur={() => {
          if (blur) {
            setShowProductCart(true);
            setBlur(false);
          }
        }}
        onChangeText={text => {
          setSearch(text);
          searchProduct(text);
        }}
        left={
          showProductCart && (
            <TextInput.Icon
              style={{ marginTop: 15 }}
              name='magnify'
              color={'gray'}
            />
          )
        }
        right={
          <TextInput.Icon
            name={!showProductCart && 'backspace'}
            style={{ marginTop: 12 }}
            color={'gray'}
            size={28}
            onPress={() => {
              setSearch('');
              setBlur(true);
              searchRef.current.blur();
            }}
          />
        }
      />
    </InputContainer>
  );
};
