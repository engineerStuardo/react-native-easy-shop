import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import styled from 'styled-components/native';

import { banner } from '../../data/banner';

const BannerContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
const BannerInnerContainer = styled.View`
  height: 200px;
  margin-top: 30px;
`;
const BannerImage = styled.Image`
  height: 100%;
  margin-right: 20px;
  margin-left: 20px;
`;

export const Banner = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData(banner);
  }, []);

  return (
    <ScrollView>
      <BannerContainer>
        <BannerInnerContainer>
          <Swiper autoplay={true} autoplayTimeout={2} showsButtons={false}>
            {bannerData.map(item => (
              <BannerImage
                key={item}
                resizeMode='contain'
                source={{ uri: item }}
              />
            ))}
          </Swiper>
        </BannerInnerContainer>
      </BannerContainer>
    </ScrollView>
  );
};
