import React from 'react';
import { View, TextInput } from 'react-native';

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
      <TextInput
        style={{
          width: '80%',
          height: 50,
          backgroundColor: 'white',
          margin: 10,
          borderRadius: 20,
          padding: 10,
          borderWidth: 2,
          borderColor: 'orange',
        }}
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
