import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 540px;
  margin-bottom: 5rem;
`;

export const VideoContainer = styled.div`
  height: 400px;
  position: absolute;
  border-radius: 10px;
  right: 150px;
  top: 40px;
  width: 55%;
  @media (max-width: 992px) {
    width: 100%;
    position: relative;
    right: 0;
  }
`;

export const MissionContainer = styled.div`
  height: 400px;
  background: ${(props) => props.theme.colors.primary};
  position: absolute;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  left: 0;
  width: 55%;
  color: white;
  padding: 4rem;
  @media (max-width: 992px) {
    width: 100%;
    position: relative;
  }
`;
