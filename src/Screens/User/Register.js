import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { Button } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { FormContainer } from '../../Shared/Form/FormContainer';
import { Input } from '../../Shared/Form/Input';
import { Error } from '../../Shared/Error';

const RegisterButtonContainer = styled(View)`
  width: 80%;
  align-self: center;
  margin-top: 30px;
  align-items: center;
`;

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const register = () => {
    if (email === '' || name === '' || phone === '' || password === '') {
      setError('Please fill in the form correctly');
    } else {
      setError('');
    }
  };

  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={200}
      enableOnAndroid={true}
    >
      <FormContainer title='Register'>
        <Input
          placeholder={'Email'}
          name={'email'}
          id={'email'}
          keyboardType={'email-address'}
          onChangeText={text => setEmail(text.toLowerCase())}
        />
        <Input
          placeholder={'Name'}
          name={'name'}
          id={'name'}
          onChangeText={text => setName(text)}
        />
        <Input
          placeholder={'Phone Number'}
          name={'phone'}
          id={'phone'}
          keyboardType={'numeric'}
          onChangeText={text => setPhone(text)}
        />
        <Input
          placeholder={'Password'}
          name={'password'}
          id={'password'}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        <RegisterButtonContainer>
          {error ? <Error message={error} /> : null}
          <Button
            style={{ width: '80%', backgroundColor: 'orange' }}
            icon='account-plus-outline'
            mode='contained'
            onPress={() => register()}
          >
            Register
          </Button>
          <Button
            style={{ width: '80%', backgroundColor: 'orange', marginTop: 15 }}
            icon='keyboard-return'
            mode='contained'
            onPress={() => navigation.navigate('Login')}
          >
            Back to Login
          </Button>
        </RegisterButtonContainer>
      </FormContainer>
    </KeyboardAwareScrollView>
  );
};

export default Register;
