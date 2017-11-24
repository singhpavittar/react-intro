import React from 'react';
import AddSubstance from './addsubstance';
import {Grid,Row, Col} from 'react-bootstrap';

class Matter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      substances: []
    }
  }

  render() {
    return (<Grid >
      <Row className="show-grid margin-0">
        <Col xs={12} md={12} lg={12} className="padding-0">
          <AddSubstance/>
        </Col>
      </Row>
    </Grid>);
  }
}

export default Matter;
