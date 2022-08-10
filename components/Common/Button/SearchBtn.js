import styled from 'styled-components';
import { Button } from 'antd';

const SearchBtn = styled(Button)`
  background-color: ${(props) => props.theme.colors.primary} !important;
  color: white !important;
  font-family: ProductSans-Regular;
  width: 145px;
  height: 50px;
  font-size: 16px;
  border-radius: 5px;
  @media (max-width: 620px) {
    margin-top: 20px;
  }
`;

export { SearchBtn };
