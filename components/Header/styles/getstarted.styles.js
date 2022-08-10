import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  width: 100%;
  max-width: 380px;
  margin-top: 1rem;
  border-radius: 4px;
  display: flex;
  padding: 0 1.5rem;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background-color: ${(props) =>
    props.mission ? '#fff' : props.theme.colors.primary};
`;

export const Text = styled.p`
  margin: 0;
  font-size: 18px;
  font-family: ProductSans-Regular;
  color: ${(props) => (props.mission ? props.theme.colors.primary : '#fff')};
`;
