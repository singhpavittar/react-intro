import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class Listing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      substance: []
    }
  }
  componentWillMount() {
    if (!localStorage.getItem("matterList")) {
      window.localStorage.setItem('matterList', JSON.stringify({}));
    }
    let substance = JSON.parse(localStorage.getItem("matterList"));
    this.setState({substance: substance});
  }

  render() {
    return (<Row className="show-grid margin-0">
      <Col xs={12} md={12} lg={12} className="padding-0">
        listing
      </Col>
    </Row>);
  }
}
export default Listing;
