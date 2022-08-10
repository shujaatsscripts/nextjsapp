import styled from 'styled-components';

const Box = styled.div`
  background-color: white;
  box-shadow: ${(props) => props.shadow && ' 0 0 10px #eee'};
  width: 284px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem 1rem 1rem;
  margin: 10px;
`;

const Heading = styled.h3`
  font-size: 22px;
  font-family: ProductSans-Regular;
  margin-top: 10px;
  text-align: center;
`;

const StyledText = styled.p`
  font-size: 16px;
  font-family: ProductSans-Regular;
  text-align: center;
`;

export { Box, Heading, StyledText };
