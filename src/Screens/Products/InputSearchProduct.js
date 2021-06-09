import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';

const InputContainer = styled.View`
  padding: 10px;
  background-color: #f7f7f3;
`;

export const InputSearchProduct = ({
  search,
  setSearch,
  searchRef,
  setShowList,
  showList,
}) => {
  return (
    <InputContainer>
      <TextInput
        label='Search'
        mode='outlined'
        value={search}
        ref={searchRef}
        onFocus={() => setShowList(false)}
        onChangeText={text => setSearch(text)}
        right={
          <TextInput.Icon
            name={!showList && 'alpha-x-box'}
            color={'gray'}
            size={28}
            onPress={() => {
              searchRef.current.blur();
              setShowList(true);
              setSearch('');
            }}
          />
        }
      />
    </InputContainer>
  );
};
