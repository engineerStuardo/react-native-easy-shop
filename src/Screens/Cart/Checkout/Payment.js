import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button, Divider } from 'react-native-paper';
import { List } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import styled from 'styled-components/native';

const FormContainer = styled(View)`
  flex: 1;
  background-color: white;
`;

const ConfirmButtonContainer = styled(View)`
  width: 200px;
  align-self: center;
  margin-top: 55px;
`;

const ConfirmButton = styled(Button)`
  border-radius: 20px;
  background-color: #5cb85c;
  padding: 5px;
`;

const methods = [
  { name: 'Cash on Delivery', value: 1, alias: 'cash' },
  { name: 'Bank Transfer', value: 2, alias: 'bank' },
  { name: 'Card Payment', value: 3, alias: 'card' },
];

const paymentCards = [
  { name: 'Wallet', value: 1 },
  { name: 'Visa', value: 2 },
  { name: 'MasterCard', value: 3 },
  { name: 'Other', value: 4 },
];

export const Payment = ({ route, navigation }) => {
  const [card, setCard] = useState();
  const [order, setOrder] = useState(route.params);

  const [checked, setChecked] = useState({
    cash: {
      status: false,
    },
    bank: {
      status: false,
    },
    card: {
      status: false,
    },
  });

  const checkedMethod = alias => {
    let value = {};
    if (alias === 'cash') {
      value = {
        bank: { status: false },
        card: { status: false },
      };
    } else if (alias === 'bank') {
      value = {
        cash: { status: false },
        card: { status: false },
      };
    } else if (alias === 'card') {
      value = {
        bank: { status: false },
        cash: { status: false },
      };
    }
    setChecked({
      ...value,
      [alias]: {
        status: !checked[alias].status,
      },
    });
  };

  return (
    <>
      <View style={{ alignSelf: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 25 }}>
          Choose your payment method
        </Text>
      </View>
      <FormContainer>
        {methods.map(method => (
          <>
            <TouchableOpacity
              key={method.value}
              onPress={() => checkedMethod(method.alias)}
            >
              <List.Item
                title={method.name}
                right={props =>
                  checked[method.alias].status && (
                    <List.Icon {...props} icon='check' color='#5cb85c' />
                  )
                }
              />
            </TouchableOpacity>
            <Divider />
          </>
        ))}
        {checked.card.status && (
          <Picker
            selectedValue={card}
            onValueChange={(itemValue, itemIndex) => setCard(itemValue)}
          >
            {paymentCards.map(item => (
              <Picker.Item
                key={item.value}
                label={item.name}
                value={item.name}
              />
            ))}
          </Picker>
        )}
        <ConfirmButtonContainer>
          <ConfirmButton
            icon='checkbox-marked-circle'
            mode='contained'
            onPress={() => navigation.navigate('Confirm', { order })}
          >
            Confirm
          </ConfirmButton>
        </ConfirmButtonContainer>
      </FormContainer>
    </>
  );
};
