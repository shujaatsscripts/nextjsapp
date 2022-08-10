import { Row, Col } from 'antd';
import { Heading, StyledCol, StyledText } from './styles/position.styles';

const Position = ({ designation, icon, name }) => {
  return (
    <Row style={{ margin: '1.5rem 0' }}>
      <Col xs={4}>
        <img src={icon} />
      </Col>
      <Col
        xs={{ span: 15, offset: 1 }}
        sm={{ span: 15, offset: 0 }}
        md={{ span: 15, offset: 0 }}
        lg={{ span: 15, offset: 1 }}
        xl={{ span: 15, offset: 0 }}
      >
        <Row>
          <StyledCol>
            <Heading>{name}</Heading>
            <StyledText>{designation}</StyledText>
          </StyledCol>
        </Row>
      </Col>
    </Row>
  );
};

export default Position;
