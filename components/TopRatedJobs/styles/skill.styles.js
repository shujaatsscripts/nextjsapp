import styled from 'styled-components';
import { Col } from 'antd';

const Heading = styled.h4`
  font-size: ${(props) => props.theme.fonts.sizes.heading4};
  font-family: ProductSans-Regular;
`;

const StyledText = styled.p`
  font-size: 16px;
  font-family: ProductSans-Regular;
  line-height: 2;
`;

const StyledTextColumn = styled(Col)`
  @media (min-width: 1200px) {
    margin-left: 2rem;
  }
  @media (min-width: 1400px) {
    margin-left: 0;
  }
`;

export { Heading, StyledText, StyledTextColumn };
