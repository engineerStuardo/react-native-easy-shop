import React from 'react';
import { View, Text } from 'react-native';

import { FormContainer } from '../../../Shared/Form/FormContainer';
import { Input } from '../../../Shared/Form/Input';

export const Checkout = () => {
  return (
    <FormContainer title='Shipping Address'>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </FormContainer>
  );
};
