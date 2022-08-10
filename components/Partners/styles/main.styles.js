import styled from 'styled-components';
import { Row, Col } from 'antd';

const BackgroundRow = styled(Row)`
  background-color: #efefef;
  width: 100%;
  min-height: 450px;
`;
const StyledText = styled.p`
  font-size: 16px;
  text-align: center;
  color: ${(props) => props.theme.colors.black};
  font-family: ProductSans-Regular;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const StyledColumn = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledPartnerImage = styled.img`
  margin: 1rem;
  width: 170px;
  height: auto;
`;
const StyledImagesRow = styled(Row)`
  width: 100%;
`;
const StyledImagesCol = styled(Col)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 1366px) {
    justify-content: center;
  }
`;

export {
  BackgroundRow,
  StyledText,
  StyledColumn,
  StyledPartnerImage,
  StyledImagesCol,
  StyledImagesRow,
};
