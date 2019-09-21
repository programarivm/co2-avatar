import React, { Component } from 'react';
import CookieConsent from "react-cookie-consent";
import { MainNav } from "./components/MainNav.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav />
        <CookieConsent>
          Cookies? This website does not collect personal data through third-party cookies, it does not use any cookie.
        </CookieConsent>
      </div>
    );
  }
}

export default App;
