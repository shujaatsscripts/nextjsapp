import { Row, Col } from 'antd';
import {
  LogoRow,
  StyledLink,
  // StyledLinkHeading,
  // StyledText,
} from './styles/info.styles';

const Info = () => {
  return (
    <>
      <LogoRow>
        <img src="/images/logo.svg" />
      </LogoRow>

      <Row>
        <Col xs={24} md={21} lg={18}>
          {/* <StyledText></StyledText> */}
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={21} md={21} lg={16}>
          <Row>
            <Col xs={12} sm={7} md={5} lg={8}>
              {/* <StyledLinkHeading>Industries</StyledLinkHeading> */}
              <StyledLink href="#home">Home</StyledLink>
              <StyledLink href="#partners">Partners</StyledLink>
              <StyledLink href="#top_rated_jobs">Top Rated Jobs</StyledLink>
            </Col>
            <Col xs={12} sm={7} md={5} lg={8}>
              <StyledLink href="#search">Search Jobs</StyledLink>
              <StyledLink href="#footer">Contact us</StyledLink>
              <StyledLink href="#about">About us</StyledLink>
            </Col>
            <Col xs={12} sm={7} md={5} lg={8}>
              <StyledLink href="https://3cix.blogspot.com/">Blog</StyledLink>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Info;
