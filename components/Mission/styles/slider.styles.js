import Slider from 'react-slick';
import styled from 'styled-components';

export const ImageSlider = styled(Slider)`
  height: 100%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

export const StyledImage = styled.img`
  width: 50%;
  @media (max-width: 480px) {
    width: 85%;
  }
`;
