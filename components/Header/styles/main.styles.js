import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import { Row, Col } from 'antd';

export const StyledContentColumn = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledNavbar = styled(Navbar)`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  position: fixed;
  top: 10;
  right: 0;
  left: 10;
  width: 95%;
  z-index: 1111;
  margin-top: 1rem;
`;
export const StyledNav = styled(Nav)`
  display: flex;
  align-items: center;
`;
export const GetStartedButton = styled.button`
  background: #fff;
  font-family: ProductSans-Regular;
  font-size: 16px;
  color: ${(props) => props.theme.colors.primary};
  width: 132px;
  height: 40px;
  border: 0;
  outline: 0;
  border-radius: 5px;
`;
export const StyledLink = styled(Nav.Link)`
  color: white !important;
  margin: 0 0.5rem;
  font-family: ProductSans-Regular;
  font-size: 16px;
`;
export const Heading = styled.h1`
  font-size: ${(props) => props.theme.fonts.sizes.heading1};
  color: white;
  font-family: ProductSans-Bold;
  // line-height: 1;
  @media (max-width: 575px) {
    font-size: 52px;
  }
  @media (max-width: 480px) {
    color: black;
  }
`;
export const StyledText = styled.p`
  color: white;
  font-size: 18px;
  line-height: 2;
  @media (max-width: 575px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    color: black;
  }
`;
export const Background = styled(Row)`
  width: 100%;
  height: 946px;
  background: url(/headerBg.svg);
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 480px) {
    background: none;
    height: 800px;
  }
`;
