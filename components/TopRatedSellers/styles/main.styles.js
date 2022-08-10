import styled from 'styled-components';
import { Row, Col } from 'antd';

export const StyledRow = styled(Row)`
  -webkit-filter: blur(5px);
  -moz-filter: blur(4px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
`;

export const BlurContainer = styled.div`
  position: relative;
`;

export const OverlayText = styled.div`
  position: absolute;
  top: 49%;
  bottom: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 50px;
  font-family: ProductSans-Bold;
  z-index: 1111;
  @media (max-width: 768px) {
    font-size: 36px;
  }
  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

export const StyledText = styled.p`
  font-size: 16px;
  font-family: ProductSans-Regular;
  line-height: 1.8;
`;

export const StyledImage = styled.img`
  height: 100%;
  position: absolute;
  top: -50px;
  left: 10px;
  @media (max-width: 480px) {
    top: 55px;
  }
`;

export const BlueRectangle = styled.div`
  display: flex;
  align-items: center;
  background-color: #237feb;
  width: 100%;
  height: 100px;
  border-radius: 10px;
`;

export const RightArrow = styled.img`
  position: absolute;
  right: 230px;
  opacity: ${(props) => (props.disable ? '0.5' : '1.0')};
  cursor: pointer;
  @media (max-width: 480px) {
    right: 0;
  }
`;

export const LeftArrow = styled.img`
  position: absolute;
  right: 300px;
  opacity: ${(props) => (props.disable ? '0.5' : '1.0')};
  cursor: pointer;
  @media (max-width: 480px) {
  }
`;

export const ImageColumn = styled(Col)`
  position: relative;
  min-height: 500px;
`;
