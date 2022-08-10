import styled from 'styled-components';
import { Col } from 'antd';

export const Heading = styled.h4`
  font-size: ${(props) => props.theme.fonts.sizes.heading4};
  font-family: ProductSans-Regular;
`;

export const StyledText = styled.p`
  font-size: 14px;
  font-family: ProductSans-Regular;
`;

export const StyledCol = styled(Col)`
  @media (max-width: 480px) {
    margin-left: 1.5rem;
  }
  margin-top: 5px;
`;
