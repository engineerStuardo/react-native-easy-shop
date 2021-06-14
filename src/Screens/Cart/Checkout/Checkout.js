import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { Picker } from '@react-native-picker/picker';
import styled from 'styled-components/native';

import { FormContainer } from '../../../Shared/Form/FormContainer';
import { Input } from '../../../Shared/Form/Input';

import countries from '../../../../data/countries.json';

const DropdownContainer = styled(View)`
  width: 80%;
  height: 50px;
  background-color: white;
  margin: 10px;
  padding: 10px;
  border-width: 2px;
  border-color: orange;
  align-self: center;
  border-radius: 20px;
  justify-content: center;
`;

const ConfirmButtonContainer = styled(View)`
  width: 200px;
  align-self: center;
  margin-top: 45px;
`;

const ConfirmButton = styled(Button)`
  border-radius: 20px;
  background-color: #5cb85c;
  padding: 5px;
`;

const Checkout = ({ cartItems, navigation }) => {
  const [orderItems, setOrderItems] = useState();
  const [address, setAddress] = useState();
  const [address2, setAddress2] = useState();
  const [city, setCity] = useState();
  const [zip, setZip] = useState();
  const [country, setCountry] = useState();
  const [phone, setPhone] = useState();

  useEffect(() => {
    setOrderItems(cartItems);
  }, []);

  const checkout = () => {
    const order = {
      city,
      country,
      dateOrdered: Date.now(),
      orderItems,
      phone,
      shippingAddress: address,
      shippingAddress2: address2,
      zip,
    };
    navigation.navigate('Payment', { order });
  };

  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={200}
      enableOnAndroid={true}
    >
      <FormContainer title='Shipping Address'>
        <Input
          placeholder={'Phone'}
          name={'phone'}
          value={phone}
          keyboardType={'numeric'}
          onChangeText={text => setPhone(text)}
        />
        <Input
          placeholder={'Shipping Address'}
          name={'shippingAddress'}
          value={address}
          onChangeText={text => setAddress(text)}
        />
        <Input
          placeholder={'Shipping Address 2'}
          name={'shippingAddress2'}
          value={address2}
          onChangeText={text => setAddress2(text)}
        />
        <Input
          placeholder={'City'}
          name={'city'}
          value={city}
          onChangeText={text => setCity(text)}
        />
        <Input
          placeholder={'Zip Code'}
          name={'zipCode'}
          value={zip}
          keyboardType={'numeric'}
          onChangeText={text => setZip(text)}
        />
        <DropdownContainer>
          <Picker
            selectedValue={country}
            onValueChange={(itemValue, itemIndex) => setCountry(itemValue)}
          >
            {countries.map(item => (
              <Picker.Item
                key={item.code}
                label={item.name}
                value={item.name}
              />
            ))}
          </Picker>
        </DropdownContainer>
        <ConfirmButtonContainer>
          <ConfirmButton
            icon='checkbox-marked-circle'
            mode='contained'
            onPress={() => checkout()}
          >
            Confirm
          </ConfirmButton>
        </ConfirmButtonContainer>
      </FormContainer>
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = state => {
  const { cartItems } = state;
  return {
    cartItems,
  };
};

export default connect(mapStateToProps, null)(Checkout);
