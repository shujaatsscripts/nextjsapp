import styled from 'styled-components';
import { Row, Col } from 'antd';

const StyledText = styled.p`
  font-size: 16px;
  text-align: ${(props) => (props.align ? props.align : 'left')};
  color: ${(props) => props.theme.colors.black};
  font-family: ProductSans-Regular;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Container = styled(Row)`
  padding: 0 0 2rem 0;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const StyledColumn = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const BoxesColumn = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 2rem 0 3rem 0;
  flex-wrap: wrap;
`;

const HowWeWork = styled.h3`
  font-size: ${(props) => props.theme.fonts.sizes.heading3};
  color: ${(props) => props.theme.colors.black};
  font-family: ProductSans-Bold;
  @media (max-width: 992px) {
    margin-top: 1.5rem;
    font-size: 28px;
  }
`;

export { StyledText, StyledColumn, BoxesColumn, Container, HowWeWork };
