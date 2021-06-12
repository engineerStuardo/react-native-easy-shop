import React from 'react';
import { View, TextInput } from 'react-native';
import styled from 'styled-components/native';

const InputText = styled(TextInput)`
  width: 80%;
  height: 50px;
  background-color: white;
  margin: 10px;
  border-radius: 20px;
  padding: 10px;
  border-width: 2px;
  border-color: orange;
`;

export const Input = ({
  placeholder,
  name,
  id,
  value,
  autoCorrect,
  onChangeText,
  onFocus,
  secureTextEntry,
  keyboardType,
}) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <InputText
        placeholder={placeholder}
        name={name}
        id={id}
        value={value}
        autoCorrect={autoCorrect}
        onChangeText={onChangeText}
        onFocus={onFocus}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};
