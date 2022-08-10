import styled from 'styled-components';
import { Row, Col } from 'antd';

const StyledRow = styled(Row)`
  background-color: #efefef;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

const BottomWrapper = styled(Col)`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-family: ProductSans-Regular;
`;

const IconRow = styled(Row)`
  margin: 2rem 0;
`;

const ContactIconWrapper = styled(Col)`
  display: flex;
  @media (max-width: 992px) {
    justify-content: center;
    margin: 0.5rem 0;
  }
`;

const SocialIconWrapper = styled(Col)`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 992px) {
    justify-content: center;
    margin: 0.5rem 0;
  }
`;
export {
  StyledRow,
  BottomWrapper,
  ContactIconWrapper,
  SocialIconWrapper,
  IconRow,
};
