import React, { Component } from 'react';
import PrivateApp from './components/private/App.js';
import PublicApp from './components/public/App.js';
import AppStore from './stores/AppStore.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = AppStore.getState();
  }

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
