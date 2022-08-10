import { Row, Col } from 'antd';
import Heading from '../Common/SectionHeading';
import {
  StyledText,
  StyledColumn,
  BoxesColumn,
  Container,
  HowWeWork,
} from './styles/main.styles';
import Job from './Job';
import Skill from './Skill';

const Main = () => {
  const jobs = [
    // {
    //   icon: '/icons/webDev.png',
    //   heading: 'Web/App Development',
    //   text:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    // },
    {
      icon: '/icons/fintech.png',
      heading: 'Financial and Accounts Consultants',
      text: '',
    },
    {
      icon: '/icons/webDesign.png',
      heading: 'IT and Telecom Engineers',
      shadow: true,
      text: '',
    },
    {
      icon: '/icons/seo.png',
      heading: 'Marketing & Sales',
      text: '',
    },
  ];
  const skills = [
    {
      icon: '/icons/coding.svg',
      heading: 'What is 3cix?',
      text:
        'A smart platform helps speed up the Recruitment and all parties Engagements.',
    },
    {
      icon: '/icons/design.svg',
      heading: 'How to Join as a Jobseeker?',
      text: 'Signup as Jobseeker. Add personal and professional details.',
    },
    {
      icon: '/icons/blockchain.svg',
      heading: 'How to Join as Recruiter?',
      text: 'Add personal and Company information. Post your first Job.',
    },
    // {
    //   icon: '/icons/marketing.svg',
    //   heading: 'Marketing',
    //   text:
    //     'Lorem ipsum dolor sit amet, consectetur  seggr adipiscing elit, sed do eiusmod tempor incididt ut labore et dolore magna aliqua. ',
    // },
  ];

  return (
    <>
      <div id="top_rated_jobs"></div>
      <br />
      <br />
      <Container justify="center">
        <Col xs={24}>
          <Row justify="center">
            <StyledColumn xs={22} md={20} xl={19}>
              <Heading text="Top Rated Jobs" />
              {/* <StyledText align="center"></StyledText> */}
            </StyledColumn>
          </Row>

          <Row justify="center">
            <BoxesColumn xs={22} md={20} xl={19} id="about">
              {jobs.map((item, index) => (
                <Job
                  key={index}
                  icon={item.icon}
                  heading={item.heading}
                  text={item.text}
                  shadow={item.shadow}
                />
              ))}
            </BoxesColumn>
          </Row>
          <Row justify="center">
            <Col xs={22} md={20} xl={19}>
              <Row>
                <Col xs={0} lg={9} xl={12}>
                  <img src="/images/topRatedJobs.png" width="100%" />
                </Col>
                <Col
                  xs={{ span: 24, offset: 0 }}
                  sm={{ span: 22, offset: 1 }}
                  md={{ span: 22, offset: 1 }}
                  lg={{ span: 14, offset: 1 }}
                  xl={{ span: 10, offset: 1 }}
                >
                  <br />
                  <br />
                  <HowWeWork>What We Do?</HowWeWork>
                  <br />
                  {skills.map((item, index) => (
                    <>
                      <Skill key={index} details={item} />
                      <br />
                    </>
                  ))}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default Main;
