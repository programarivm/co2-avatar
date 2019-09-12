import React, { Component } from 'react';
import PrivateApp from './components/private/App.js';
import PublicApp from './components/public/App.js';
import './App.css';

class App extends Component {
  render() {
    let isAuthenticated = false;
    return (
      <div className="App">
        { isAuthenticated ? <PrivateApp /> : <PublicApp /> }
      </div>
    );
  }
}

export default App;
