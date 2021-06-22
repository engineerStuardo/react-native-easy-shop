import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';

import { FormContainer } from '../../Shared/Form/FormContainer';
import { Input } from '../../Shared/Form/Input';
import { Error } from '../../Shared/Error';
import { loginUser } from '../../Redux/user/userActions';

const LoginButtonContainer = styled(View)`
  width: 80%;
  align-self: center;
  margin-top: 25px;
  align-items: center;
`;

const RegisterButtonContainer = styled(View)`
  width: 80%;
  align-self: center;
  margin-top: 50px;
  align-items: center;
`;

const Login = ({ navigation, loginUser, user }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useFocusEffect(() => {
    if (user.isAuthenticated) {
      navigation.navigate('UserProfile')
    }
  }, [user.isAuthenticated])

  const handleSubmit = () => {
    const user = {
      email,
      password,
    };

    if (email === '' || password === '') {
      setError('Please fill in your credentials');
    } else {
      setError('');
      loginUser(user)
    }
  };

  if (user.isAuthenticated) {
    return null;
  }

  return (
    <FormContainer title='Login'>
      <Input
        placeholder={'Enter Email'}
        name={'email'}
        id={'email'}
        value={email}
        keyboardType='email-address'
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
      <LoginButtonContainer>
        {error ? <Error message={error} /> : null}
        {user.loading ? <ActivityIndicator animating={true} color={Colors.orange800} size={'small'} /> :
          <Button
            style={{ width: '80%', backgroundColor: 'orange' }}
            icon='login'
            mode='contained'
            onPress={() => handleSubmit()}
          >
            Login
          </Button>
        }
      </LoginButtonContainer>
      {!user.loading && (
        <RegisterButtonContainer>
          <Text>Don't have an account yet?</Text>
          <Button
            style={{ width: '80%', backgroundColor: 'orange', marginTop: 10 }}
            icon='account-plus-outline'
            mode='contained'
            onPress={() => {
              setError('');
              navigation.navigate('Register');
            }}
          >
            Register
          </Button>
        </RegisterButtonContainer>
      )}
    </FormContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  loginUser: (user) => dispatch(loginUser(user)),
})

const mapStateToProps = ({ user }) => ({
  user
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
