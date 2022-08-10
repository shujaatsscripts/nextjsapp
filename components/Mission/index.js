import OurMission from './OurMission';
import { useRef, useState } from 'react';
import {
  Wrapper,
  VideoContainer,
  MissionContainer,
} from './styles/main.styles';
import { ImageWrapper, StyledImage, ImageSlider } from './styles/slider.styles';

const Mission = () => {
  let slider = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    afterChange: () => {},
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  const data = [
    {
      heading: 'Smart Job Search',
      desc:
        'Avoid thousands of unnecessary job openings and see the more specific matches.',
    },
    {
      heading: 'Smart Recruitment',
      desc: 'AI based candidate listings allows 5 Best match profiles to hire.',
    },
    {
      heading: 'Interviewings',
      desc:
        'Shortlist- Interview and offer just in few clicks. No hassle of 3rd party tools and emails.',
    },
    {
      heading: 'Virtual Teams',
      desc:
        'Track and Communicate with your teams on our platform using our Virtual Team Collaboration tool',
    },
    {
      heading: 'AI Trainings',
      desc:
        'Empower employees with Smart AI based Trainings. Growth is necessary on all levels of Job Hierarchy.',
    },
  ];
  return (
    <Wrapper>
      <MissionContainer>
        <OurMission data={data} currentIndex={currentIndex} />
      </MissionContainer>

      <VideoContainer>
        <ImageSlider {...settings} ref={(s) => (slider = s)}>
          <div>
            <ImageWrapper>
              <StyledImage src="/slider/coaching.jpg" />
            </ImageWrapper>
          </div>
          <div>
            <ImageWrapper>
              <StyledImage src="/slider/recruitment.jpg" />
            </ImageWrapper>
          </div>
          <div>
            <ImageWrapper>
              <StyledImage src="/slider/interview.jpg" />
            </ImageWrapper>
          </div>
          <div>
            <ImageWrapper>
              <StyledImage src="/slider/coworking.jpg" />
            </ImageWrapper>
          </div>
        </ImageSlider>
      </VideoContainer>
    </Wrapper>
  );
};

export default Mission;
