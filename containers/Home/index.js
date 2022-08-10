import TopRatedJobs from '../../components/TopRatedJobs';
import Footer from '../../components/Footer';
import Partners from '../../components/Partners';
import TopRatedSellers from '../../components/TopRatedSellers';
import Header from '../../components/Header';
import Search from '../../components/Search';
import Mission from '../../components/Mission';
import { Row, Col } from 'antd';

const Home = () => {
  return (
    <>
      <Row>
        <Col xs={24}>
          <Header />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={23} md={19} lg={15} xl={12} xxl={11}>
          <Search />
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <TopRatedJobs />
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <Mission />
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <Partners />
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <TopRatedSellers />
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <Footer />
        </Col>
      </Row>
    </>
  );
};

export default Home;
