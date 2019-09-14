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

  componentDidMount() {
    AppStore.on("log_in_succeeded", () => {
      this.setState(AppStore.getState());
    });
    AppStore.on("log_out", () => {
      this.setState(AppStore.getState());
    });
  }

  render() {
    return (
      <div className="App">
        { this.state.authenticated ? <PrivateApp /> : <PublicApp /> }
      </div>
    );
  }
}

export default App;
