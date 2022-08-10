import styled from 'styled-components';

const FooterInput = styled.input`
  width: 100%;
  height: 50px;
  background-color: white;
  border: none;
  outline: none;
  padding-left: 10px;
  font-size: 16px;
  border-radius: 5px;
  font-family: ProductSans-Regular;
  &:focus {
    outline: none;
    border: none;
  }
`;

export { FooterInput };
