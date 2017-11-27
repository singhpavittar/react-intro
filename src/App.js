import React, {Component} from 'react';
import './App.css';
import './styles/fonts.css';
import Main from './components/main';
import {Grid} from 'react-bootstrap';

class App extends Component {
  render() {
    return (<Grid className="app-container">
      <Main/>
    </Grid>);
  }
}

export default App;
