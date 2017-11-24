import React, {Component} from 'react';
import Main from './components/main';
import Header from './components/header';
import './App.css';
import {Switch, Route} from 'react-router';
import AddSubstance from './components/addsubstance';
import ErrorPage from './components/errorpage';
import {Grid} from 'react-bootstrap';

class App extends Component {
  render() {
    return (<Grid className="app-container">
      <Header/>
      <Switch>
        <Route exact path="/" component={AddSubstance}/>
        <Route path="/error" component={ErrorPage}/>
        <Route component={ErrorPage}/>
      </Switch>
    </Grid>);
  }
}

export default App;
