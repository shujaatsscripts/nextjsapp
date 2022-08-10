import { Row, Col } from 'antd';
import SectionHeading from '../Common/SectionHeading';
import Position from './Position';
import {
  StyledText,
  StyledImage,
  BlueRectangle,
  ImageColumn,
  RightArrow,
  LeftArrow,
  StyledRow,
  BlurContainer,
  OverlayText,
} from './styles/main.styles';

const TopRatedSellers = () => {
  return (
    <BlurContainer>
      <OverlayText>
        <span>Coming Soon</span>
      </OverlayText>
      <StyledRow justify="end">
        <Col xs={21} style={{ padding: '5rem 0 3rem 0' }}>
          <Row>
            <Col xs={24} lg={9} style={{}}>
              <img src="/icons/quotes.svg" />
              <SectionHeading margin="1rem 0 0 0" text="Top Candidates" />
              <StyledText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad x ea commodo consequat olor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                do.
              </StyledText>
              <br />
              <Position
                icon="/icons/personDesignation.svg"
                name="Mellissa Henry"
                designation="Marketing Manager"
              />
            </Col>

            <ImageColumn xs={0} md={24} lg={{ span: 12, offset: 3 }}>
              <BlueRectangle>
                <RightArrow src="/right-arrow.svg" width="40" />
                <LeftArrow src="/left-arrow.svg" width="40" disable />
              </BlueRectangle>
              <StyledImage src="/person.png" />
            </ImageColumn>
          </Row>
        </Col>
      </StyledRow>
    </BlurContainer>
  );
};

export default TopRatedSellers;
