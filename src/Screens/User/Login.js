import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { FormContainer } from '../../Shared/Form/FormContainer';
import { Input } from '../../Shared/Form/Input';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <FormContainer title='Login'>
      <Input
        placeholder={'Enter Email'}
        name={'email'}
        id={'email'}
        value={email}
        onChangeText={text => setEmail(text.toLowerCase())}
      />
      <Input
        placeholder={'Enter Password'}
        name={'password'}
        id={'password'}
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <View
        style={{
          width: '80%',
          alignSelf: 'center',
          marginTop: 25,
          alignItems: 'center',
        }}
      >
        <Button
          style={{ width: '80%', backgroundColor: 'orange' }}
          icon='login'
          mode='contained'
          onPress={() => console.log('Pressed')}
        >
          Login
        </Button>
      </View>
      <View
        style={{
          width: '80%',
          alignSelf: 'center',
          marginTop: 50,
          alignItems: 'center',
        }}
      >
        <Text>Don't have an account yet?</Text>
        <Button
          style={{ width: '80%', backgroundColor: 'orange', marginTop: 10 }}
          icon='account-plus-outline'
          mode='contained'
          onPress={() => navigation.navigate('Register')}
        >
          Register
        </Button>
      </View>
    </FormContainer>
  );
};

export default Login;
