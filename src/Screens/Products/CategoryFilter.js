import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Chip } from 'react-native-paper';
import styled from 'styled-components/native';

const CustomChip = styled(Chip)`
  background-color: ${props => (props.isSelected ? '#f5bb5d' : '#fe9100')};
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
    <ScrollViewStyle horizontal={true}>
      <ChipContainer>
        {categoriesJson.map((item, index) => (
          <TouchableOpacity key={item._id} style={{ marginRight: 10 }}>
            <CustomChip
              isSelected={isSelected === index}
              index={index}
              selected={isSelected === index ? true : false}
              selectedColor={isSelected === index ? 'white' : 'white'}
              icon={item.icon}
              textStyle={{
                color: `${isSelected === index ? 'white' : 'white'}`,
              }}
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
