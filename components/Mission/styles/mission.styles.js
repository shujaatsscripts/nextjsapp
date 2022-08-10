import styled from 'styled-components';

export const StyledText = styled.p`
  font-family: ProductSans-Regular;
  font-size: 16px;
  margin-top: 2.5rem;
  line-height: 1.8;
`;

export const ContentContainer = styled.div`
  width: 50%;
  @media (max-width: 992px) {
    width: 100%;
  }
`;
