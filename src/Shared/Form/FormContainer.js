import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export const FormContainer = ({ title, children }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        marginTop: 30,
        marginBottom: 400,
        width: '100%',
      }}
    >
      <View style={{ alignSelf: 'center' }}>
        <Text style={{ fontSize: 30 }}>{title}</Text>
      </View>
      {children}
    </ScrollView>
  );
};
