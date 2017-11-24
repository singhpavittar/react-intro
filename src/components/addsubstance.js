import React from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  Button,
  Row,
  Col
} from 'react-bootstrap';

class AddSubstance extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<Row className="margin-0">
      <Col xs={6} md={6} lg={6} className="padding-0 col-centered">
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail" className="m-l-0 m-r-0">
            <FormControl type="text" placeholder="Substance Name"/>
          </FormGroup>
          <FormGroup controlId="formHorizontalPassword" className="m-l-0 m-r-0">
            <FormControl type="text" placeholder="Substance Type"/>
          </FormGroup>
          <FormGroup controlId="formHorizontalPassword" className="m-l-0 m-r-0">
            <FormControl type="number" placeholder="boiling point"/>
          </FormGroup>
          <FormGroup controlId="formHorizontalPassword" className="m-l-0 m-r-0">
            <FormControl type="number" placeholder="freezing point"/>
          </FormGroup>
          <FormGroup controlId="formHorizontalPassword" className="m-l-0 m-r-0">
            <FormControl type="number" placeholder="current temperature"/>
          </FormGroup>
          <FormGroup className="m-l-0 m-r-0">
            <Button type="submit">
              Sign in
            </Button>
          </FormGroup>
        </Form>
      </Col>
    </Row>);
  }
}

export default AddSubstance;
