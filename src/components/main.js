import React from 'react';
import {Row, Col} from 'react-bootstrap';
import ErrorPage from './errorpage';
import {Switch, Route} from 'react-router';
import AddSubstance from './addsubstance';
import Header from './header';
import Home from './home';
import Listing from './listing';

class Main extends React.Component {

  renderComponents = () => ({
    Home: () => <div><Header/><Home/></div>,
    AddSubstance: () => <div><Header/><AddSubstance/></div>,
    Listing: () => <div><Header/><Listing/></div>,
    ErrorPage: () => <ErrorPage/>
  });

  render() {
    return (<Switch>
      <Route exact path="/" component={this.renderComponents()['Home']}/>
      <Route path="/add" component={this.renderComponents()['AddSubstance']}/>
      <Route path="/listing" component={this.renderComponents()['Listing']}/>
      <Route path="/404" component={this.renderComponents()['ErrorPage']}/>
      <Route component={this.renderComponents()['ErrorPage']}/>
    </Switch>);
  }
}

export default Main;
