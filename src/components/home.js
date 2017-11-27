import React from 'react';
import {Row, Col} from 'react-bootstrap';

const Home = () => {
  return (<Row className="m-t-40">
    <Col lg={12} sm={12} md={12} xs={12} className="text-center">
      <img src={require('../assets/stateofmatter.png')} alt="state of matter"/>
    </Col>
  </Row>);
}

export default Home;
