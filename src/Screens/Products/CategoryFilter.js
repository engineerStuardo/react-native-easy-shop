import React, { useState, useEffect } from 'react';
import { TouchableOpacity, ScrollView, Text } from 'react-native';
import { Chip } from 'react-native-paper';
import styled from 'styled-components/native';

const CustomChip = styled(Chip)`
  background-color: #ffaa00;
`;

const ChipContainer = styled.View`
  flex-direction: row;
  margin-left: 20px;
  margin-right: 20px;
`;

const ScrollViewStyle = styled.ScrollView`
  background-color: #f2f2f2;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const CategoryFilter = ({ categoriesJson, changeCtg }) => {
  const [isSelected, setIsSelected] = useState(0);

  useEffect(() => {
    changeCtg();
  }, []);

  return (
    <ScrollViewStyle>
      <ChipContainer>
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
      </ChipContainer>
    </ScrollViewStyle>
  );
};
