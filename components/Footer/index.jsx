import {
  StyledRow,
  BottomWrapper,
  ContactIconWrapper,
  SocialIconWrapper,
  IconRow,
} from './styles/main.styles';
import { Row, Col } from 'antd';
import GetInTouch from './GetInTouch';
import Info from './Info';
import Icon from '../Common/Icon';

const Main = () => {
  return (
    <>
      <StyledRow id="footer">
        <Col xs={22} md={21} lg={18}>
          <Row>
            <Col xs={24} md={24} lg={14}>
              <Info />
            </Col>
            <Col xs={24} md={24} lg={10}>
              <GetInTouch />
            </Col>
          </Row>

          <IconRow>
            <ContactIconWrapper xs={24} lg={12}>
              <Icon src="/icons/phone.svg" margin="0 15px 0 0" />
              <Icon src="/icons/mail.svg" />
            </ContactIconWrapper>
            <SocialIconWrapper xs={24} lg={12}>
              <Icon src="/icons/instagram.svg" margin="0 0 0 15px" />
              <Icon src="/icons/ball.svg" margin="0 0 0 15px" />
              <Icon src="/icons/twitter.svg" margin="0 0 0 15px" />
              <Icon src="/icons/youtube.svg" margin="0 0 0 15px" />
            </SocialIconWrapper>
          </IconRow>
        </Col>
      </StyledRow>
      <Row>
        <BottomWrapper xs={24}>All Rights Reserved</BottomWrapper>
      </Row>
    </>
  );
};

export default Main;
