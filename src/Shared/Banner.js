import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import styled from 'styled-components/native';

import { banner } from '../../data/banner';

const BannerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  align-self: center;
`;
const BannerInnerContainer = styled.View`
  height: 200px;
  width: 100%;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  align-self: center;
`;
const BannerImage = styled.Image`
  height: 100%;
  width: 100%;
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
