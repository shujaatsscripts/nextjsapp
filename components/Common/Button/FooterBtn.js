import styled from 'styled-components';
import { Button } from 'antd';

const FooterBtn = styled(Button)`
  background-color: ${(props) => props.theme.colors.primary} !important;
  color: white !important;
  font-family: ProductSans-Regular;
  width: 150px;
  height: 40px;
  font-size: 16px;
  border-radius: 5px;
`;

export { FooterBtn };
