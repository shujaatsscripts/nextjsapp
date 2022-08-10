import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  margin-top: -50px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  @media (max-width: 620px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (max-width: 480px) {
    box-shadow: 0 0 10px #eee;
    margin-bottom: 1rem;
  }
`;
