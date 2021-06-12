import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { Picker } from '@react-native-picker/picker';

import { FormContainer } from '../../../Shared/Form/FormContainer';
import { Input } from '../../../Shared/Form/Input';

import countries from '../../../../data/countries.json';

const Checkout = ({ cartItems }) => {
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
        {/* <View
          style={{
            width: '80%',
            height: 60,
            backgroundColor: 'white',
            margin: 10,
            borderRadius: 20,
            padding: 10,
            borderWidth: 2,
            borderColor: 'orange',
            alignSelf: 'center',
          }}
        > */}
        {/* <Picker
          selectedValue={country}
          onValueChange={(itemValue, itemIndex) => setCountry(itemValue)}
        >
          {countries.map(item => (
            <Picker.Item key={item.code} label={item.name} value={item.name} />
          ))}
        </Picker> */}
        {/* </View> */}
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
