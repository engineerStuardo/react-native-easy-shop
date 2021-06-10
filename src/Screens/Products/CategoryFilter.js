import React, { useState } from 'react';
import { TouchableOpacity, ScrollView, Text } from 'react-native';
import { Chip } from 'react-native-paper';
import styled from 'styled-components/native';

const CustomChip = styled(Chip)`
  background-color: #ffaa00;
`;

export const CategoryFilter = ({ categoriesJson, changeCtg }) => {
  const [isSelected, setIsSelected] = useState(0);

  return (
    <ScrollView
      bounces={true}
      horizontal={true}
      style={{ backgroundColor: '#f2f2f2', paddingTop: 20, paddingBottom: 20 }}
    >
      {categoriesJson.map((item, index) => (
        <TouchableOpacity key={item._id} style={{ marginRight: 10 }}>
          <CustomChip
            selected={isSelected === index ? true : false}
            selectedColor={isSelected === index ? 'white' : null}
            icon={item.icon}
            onPress={() => {
              setIsSelected(index);
              changeCtg(item._id, index);
            }}
          >
            {item.name}
          </CustomChip>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
