import SectionHeading from '../Common/SectionHeading';
import { StyledText, ContentContainer } from './styles/mission.styles';

const OurMission = ({ data, currentIndex }) => {
  return (
    <>
      <ContentContainer>
        <SectionHeading text="Our Features" color="#fff" />

        <StyledText>
          <span style={{ fontSize: '24px', lineHeight: '1.2' }}>
            {data[currentIndex].heading}:
          </span>
          <br />
          {data[currentIndex].desc}
        </StyledText>
      </ContentContainer>
    </>
  );
};

export default OurMission;
