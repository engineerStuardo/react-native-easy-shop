import React, { useState, useCallback } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { Button } from 'react-native-paper';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';

import { logoutUser } from '../../Redux/user/userActions';
import baseURL from '../../../assets/common/baseUrl';

const LoginButtonContainer = styled(View)`
  width: 80%;
  align-self: center;
  margin-top: 25px;
  align-items: center;
`;

const UserProfile = ({ navigation, logoutUser, user }) => {
  const [userProfile, setUserProfile] = useState('');
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const logout = () => {
    AsyncStorage.removeItem('jwt').then(() => {
      logoutUser();
      navigation.navigate('Login');
    });
  };

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      AsyncStorage.getItem('jwt').then(res => {
        setUserInfo(user.user.userId);
        axios
          .get(`${baseURL}users/id/${userInfo}/`, {
            headers: { Authorization: `Bearer ${res}` },
          })
          .then(user => {
            setUserProfile(user.data);
            setLoading(false);
          })
          .catch(error => {
            setLoading(false);
            console.log(error);
          });
      });
    }, [userInfo])
  );

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator
          animating={true}
          color={Colors.orange800}
          size={50}
        />
      </View>
    );
  }

  return (
    <View>
      <View style={{ alignSelf: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30, marginTop: 30, marginBottom: 15 }}>
          {userProfile.name}
        </Text>
        <View style={{ marginBottom: 40 }}>
          <Text>Email: {userProfile.email}</Text>
          <Text>Phone: {userProfile.phone}</Text>
        </View>
      </View>
      <LoginButtonContainer>
        <Button
          style={{ width: '80%', backgroundColor: 'orange' }}
          icon='login'
          mode='contained'
          onPress={() => logout()}
        >
          Logout
        </Button>
      </LoginButtonContainer>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser()),
});

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
