import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SideBar from './components/layout/SideBar'
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider style={{fontFamily:'Raleway'}}>
        <div>
          <SideBar />
          <Main />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
