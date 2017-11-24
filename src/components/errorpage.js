import React from 'react';
import {Row, Col} from 'react-bootstrap';

const ErrorPage = () => (<Row className="bg-black margin-0 full-height">
  <Col lg={12} sm={12} xs={12} md={12} className="text-center centering-body l-h-1-2">
    <h1 className="text-gold text-uppercase ">
      OOPS! 404 Error
    </h1>
    <p className="text-white text-uppercase fs-20">Page not found</p>
  </Col>
</Row>);

export default ErrorPage;
