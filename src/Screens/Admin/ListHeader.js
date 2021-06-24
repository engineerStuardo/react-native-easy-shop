import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const ListHeaderContainer = styled(View)`
  flex-direction: row;
  padding: 5px;
  background-color: gainsboro;
`;

const ImageTitle = styled(View)`
  margin: 5px;
  width: ${props => `${props.windowWidth / 7}px`};
`;

const NameTitle = styled(View)`
  margin: 3px;
  align-items: center;
  width: ${props => `${props.windowWidth / 2.5}px`};
`;

const CategoryTitle = styled(View)`
  margin: 3px;
  align-items: center;
  width: ${props => `${props.windowWidth / 4.9}px`};
`;

const PriceTitle = styled(View)`
  margin: 3px;
  align-items: center;
  width: ${props => `${props.windowWidth / 6.5}px`};
`;

const windowWidth = Dimensions.get('window').width;

const ListHeader = () => {
  return (
    <ListHeaderContainer>
      <ImageTitle windowWidth={windowWidth} />
      <NameTitle windowWidth={windowWidth}>
        <Text style={{ fontWeight: 'bold' }} windowWidth={windowWidth}>
          Name
        </Text>
      </NameTitle>
      <CategoryTitle windowWidth={windowWidth}>
        <Text style={{ fontWeight: 'bold' }} windowWidth={windowWidth}>
          Category
        </Text>
      </CategoryTitle>
      <PriceTitle windowWidth={windowWidth}>
        <Text style={{ fontWeight: 'bold' }} windowWidth={windowWidth}>
          Price
        </Text>
      </PriceTitle>
    </ListHeaderContainer>
  );
};

export default ListHeader;
