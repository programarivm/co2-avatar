import React from 'react';
import { Provider } from 'react-redux';
import CookieConsent from "react-cookie-consent";
import MainNav from "./components/MainNav.js";
import Footer from "./components/Footer.js";
import store from './store';
import './App.css';

const App = () => {
  return(
    <Provider store={store}>
      <div className="App">
        <MainNav />
        <Footer />
        <CookieConsent>
          Cookies? Mmm, they are delicious! This website does not collect personal data through third-party cookies.
        </CookieConsent>
      </div>
    </Provider>
  );
}

export default App;
