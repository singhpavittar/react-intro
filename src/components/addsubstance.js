import React from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  Button,
  Row,
  Col
} from 'react-bootstrap';

import {Fullpage, Slide, HorizontalSlider} from 'fullpage-react';

const fullPageOptions = {
  scrollSensitivity: 5,
  touchSensitivity: 7,
  scrollSpeed: 400,
  hideScrollBars: true,
  enableArrowKeys: true,
  breakpoint: 375
};

const horizontalSliderProps = {
  name: 'horizontalSlider1', // name is required
  infinite: true, // enable infinite scrolling
};

const horizontalSlides = [
  <Slide> Slide 2.1 </Slide>,
  <Slide> Slide 2.2 </Slide>
];
horizontalSliderProps.slides = horizontalSlides;

const slides = [
  <Slide> Slide 1 </Slide>,
  <HorizontalSlider {...horizontalSliderProps}></HorizontalSlider>,
  <Slide> Slide 3 </Slide>
];
fullPageOptions.slides = slides;

class AddSubstance extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      boilingPt: '',
      freezingPt: '',
      currentTemp: ''
    };
  }

  handleSubstance = (e) => {
    e.preventDefault();
    if (!localStorage.getItem("matterList")) {
      window.localStorage.setItem('matterList', JSON.stringify({}));
    }
    let matter = localStorage.getItem("myCat");
    matter.push({name: this.state.name, type: this.state.type, boilingPt: this.state.boilingPt, freezingPt: this.state.nafreezingPtme, currentTemp: this.state.currentTemp});
    window.localStorage.setItem('matterList', JSON.stringify(matter));
  }

  render() {
    return (<div>
      <Fullpage {...fullPageOptions}></Fullpage>
    </div>);
  }

  // render() {
  //   return (<Row className="margin-0">
  //     <Col xs={6} md={6} lg={6} className="padding-0 col-centered centering-form-div">
  //       <Form horizontal>
  //         <FormGroup controlId="formHorizontalEmail" className="m-l-0 m-r-0">
  //           <FormControl type="text" placeholder="Substance Name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
  //         </FormGroup>
  //         <FormGroup controlId="formHorizontalPassword" className="m-l-0 m-r-0">
  //           <FormControl type="text" placeholder="Substance Type" value={this.state.type} onChange={(e) => this.setState({type: e.target.value})}/>
  //         </FormGroup>
  //         <FormGroup controlId="formHorizontalPassword" className="m-l-0 m-r-0">
  //           <FormControl type="number" placeholder="boiling point" value={this.state.boilingPt} onChange={(e) => this.setState({boilingPt: e.target.value})}/>
  //         </FormGroup>
  //         <FormGroup controlId="formHorizontalPassword" className="m-l-0 m-r-0">
  //           <FormControl type="number" placeholder="freezing point" value={this.state.freezingPt} onChange={(e) => this.setState({freezingPt: e.target.value})}/>
  //         </FormGroup>
  //         <FormGroup controlId="formHorizontalPassword" className="m-l-0 m-r-0">
  //           <FormControl type="number" placeholder="current temperature" value={this.state.currentTemp} onChange={(e) => this.setState({currentTemp: e.target.value})}/>
  //         </FormGroup>
  //         <FormGroup className="m-l-0 m-r-0 text-center">
  //           <Button type="submit" bsStyle="info" onClick={(e) => this.handleSubstance(e)}>
  //             Add Substance
  //           </Button>
  //         </FormGroup>
  //       </Form>
  //     </Col>
  //   </Row>);
  // }
}

export default AddSubstance;
