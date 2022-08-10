import styled from 'styled-components';

const Heading = styled.h3`
  font-size: ${(props) => props.theme.fonts.sizes.heading3};
  color: ${(props) => props.theme.colors.black};
  font-family: ProductSans-Bold;
  @media (max-width: 992px) {
    margin-top: 1.5rem;
    font-size: 28px;
  }
`;

const StyledTextArea = styled.textarea`
  height: 165px;
  width: 100%;
  background-color: white;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 16px;
  font-family: ProductSans-Regular;
  margin: 15px 0 10px 0;
  &:focus {
    outline: none;
    border: none;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export { Heading, StyledTextArea, ButtonWrapper };
