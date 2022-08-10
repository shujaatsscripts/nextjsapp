import { Row, Col } from 'antd';
import { Heading, StyledText, StyledTextColumn } from './styles/skill.styles';

const Skill = ({ details: { icon, heading, text } }) => {
  return (
    <Row style={{ margin: '1.5rem 0' }}>
      {/* <Col xs={4}><img src={icon} /></Col> */}
      <StyledTextColumn
        // xs={{ span: 17, offset: 3 }}
        // sm={{ span: 18, offset: 1 }}
        // md={{ span: 18, offset: 1 }}
        // lg={{ span: 17, offset: 1 }}
        // xl={{ span: 17, offset: 0 }}
        xs={17}
      >
        <Row>
          <Col>
            <Heading>{heading}</Heading>
          </Col>
        </Row>
        <Row>
          <Col>
            <StyledText>{text}</StyledText>
          </Col>
        </Row>
      </StyledTextColumn>
    </Row>
  );
};

export default Skill;
