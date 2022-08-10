import React from 'react';
import Home from '../containers/Home';
import { Row, Col } from 'antd';

export default function Index() {
  return (
    <Row>
      <Col xs={24}>
        <Home />
      </Col>
    </Row>
  );
}
