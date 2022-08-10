import { Row, Col } from 'antd';
import GetStarted from './GetStarted';
import { Navbar } from 'react-bootstrap';
import {
  Background,
  StyledText,
  Heading,
  StyledLink,
  GetStartedButton,
  StyledNav,
  StyledNavbar,
  StyledContentColumn,
} from './styles/main.styles';

const Header = () => {
  return (
    <Background justify="center" id="home">
      <Col xs={{ span: 23, offset: 1 }}>
        <StyledNavbar bg="primary" expand="lg">
          <Navbar.Brand href="#home">
            <img src="/images/logoWhite.svg" width="100" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <StyledNav className="ml-auto">
              <StyledLink href="#home">Home</StyledLink>
              <StyledLink href="#search">Search Jobs</StyledLink>
              <StyledLink href="#top_rated_jobs">Top Rated Jobs</StyledLink>
              <StyledLink href="#about">About us</StyledLink>
              <StyledLink href="#partners">Partners</StyledLink>
              <StyledLink href="#footer">Contact us</StyledLink>
              <StyledLink href="#link">
                <GetStartedButton>Get Started</GetStartedButton>
              </StyledLink>
            </StyledNav>
          </Navbar.Collapse>
        </StyledNavbar>
      </Col>

      <Col xs={22}>
        <Row>
          <StyledContentColumn xs={24} sm={20} md={16} lg={12} xl={8}>
            <Heading>Ai Recruitment, Better Than Best.</Heading>
            <StyledText>
              3cix is a Smart Recruitment and Employee Engagement Platform.
              Using AI, it aim towards more Accurate and Advanced Relationship
              between Employer and Jobseekers.
            </StyledText>
            <div id="search">
              <GetStarted />
            </div>
          </StyledContentColumn>
        </Row>
      </Col>
    </Background>
  );
};

export default Header;
