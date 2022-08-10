import styled from 'styled-components';
import { Row, Col } from 'antd';
import Link from 'next/link';

const LogoRow = styled(Row)`
  margin-bottom: 2rem;
`;

const StyledText = styled.p`
  font-size: 16px;
  font-family: ProductSans-Regular;
  @media (max-width: 575px) {
    font-size: 14px;
  }
`;

const StyledLinkHeading = styled.h3`
  font-size: ${(props) => props.theme.fonts.sizes.heading5};
  font-family: ProductSans-Regular;
`;

const StyledLink = styled.a`
  font-size: 16px;
  margin: 5px 0;
  display: block;
  &:hover {
    color: ${(p) => p.theme.colors.primary};
  }
  font-family: ProductSans-Regular;
  color: black;
  @media (max-width: 575px) {
    font-size: 14px;
  }
`;

export { LogoRow, StyledLink, StyledLinkHeading, StyledText };
