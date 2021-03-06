import React from 'react';
import {
  Collapse, Navbar, NavbarToggler,
  NavbarBrand, Nav, NavItem,
  NavLink } from 'reactstrap';
import { Link, Route, Redirect } from 'react-router-dom';
import { Home } from "./Home.js";
import { SavePlanet } from "./SavePlanet.js";
import { TakeTest } from "./TakeTest.js";
import { Results } from "./Results.js";
import logo from '../assets/images/logo.png';
import './MainNav.css';

class MainNav extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  toggle() {
    if (this._isMounted) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }

  render() {
    return (
      <div>
        <Navbar light expand="md" className="MainNav">
          <NavbarBrand tag={Link} to="/home">
            <img src={logo} className="logo" alt="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/home">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/save-the-planet">
                  Save the planet
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/take-the-test">
                  Take the test
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Route exact path="/" render={() => (<Redirect to="/home" />)} />
        <Route
          path="/home"
          render={(props) => <Home {...props} />}
        />
        <Route
          path="/save-the-planet"
          render={(props) => <SavePlanet {...props} />}
        />
        <Route
          path="/take-the-test"
          render={(props) => <TakeTest {...props} />}
        />
        <Route
          path="/results"
          render={(props) => <Results {...props} />}
        />
      </div>
    );
  }
}

export { MainNav };
