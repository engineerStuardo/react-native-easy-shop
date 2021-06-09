import React, { useState } from 'react';
import { TouchableOpacity, ScrollView, Text } from 'react-native';
import { Chip } from 'react-native-paper';

export const CategoryFilter = ({ categoriesJson, changeCtg, productsCtg }) => {
  const [isSelected, setIsSelected] = useState(0);

  return (
    <ScrollView
      bounces={true}
      horizontal={true}
      style={{ backgroundColor: '#f2f2f2', paddingTop: 20, paddingBottom: 20 }}
    >
      {categoriesJson.map((item, index) => (
        <TouchableOpacity key={item._id} style={{ marginRight: 10 }}>
          <Chip
            selected={isSelected === index ? true : false}
            icon={item.icon}
            onPress={() => {
              setIsSelected(index);
              changeCtg(item._id);
            }}
          >
            {item.name}
          </Chip>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
