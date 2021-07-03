import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Button } from 'react-native-paper';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import { OrderCard } from '../Admin/OrderCard';

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
  const [token, setToken] = useState();
  const [orders, setOrders] = useState();

  const logout = () => {
    AsyncStorage.removeItem('jwt').then(() => {
      logoutUser();
      navigation.navigate('Login');
    });
  };

  const getUserInfo = () => {
    AsyncStorage.getItem('jwt').then(res => {
      setToken(res);
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
  };

  const getOrders = () => {
    axios
      .get(`${baseURL}orders`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(orders => {
        const data = orders.data;
        const userOrders = data.filter(
          order => order.user._id === user.user.userId
        );
        setOrders(userOrders);
      })
      .catch(err => console.log(err));
  };

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getUserInfo();
      getOrders();
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
    <ScrollView>
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
          icon='logout'
          mode='contained'
          onPress={() => logout()}
        >
          Logout
        </Button>
      </LoginButtonContainer>
      <View style={{ alignItems: 'center', marginTop: 45 }}>
        <Text style={{ fontSize: 25 }}>My Orders</Text>
        <View>
          {orders ? (
            orders.map(order => <OrderCard key={order.id} {...order} isUser />)
          ) : (
            <Text>You have no orders yet...</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser()),
});

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
