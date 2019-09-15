import React from 'react';
import {
  Collapse, Navbar, NavbarToggler,
  NavbarBrand, Nav, NavItem,
  NavLink } from 'reactstrap';
import { Link, Route } from 'react-router-dom';
import { Dashboard } from "./Dashboard.js";
import { TakeTest } from "./TakeTest.js";
import AppActions from '../../actions/AppActions.js';
import logo from '../../assets/images/logo.png';
import './MainNav.css';

class MainNav extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
    this.logOut = this.logOut.bind(this);
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

  logOut() {
    AppActions.logOut();
  }

  render() {
    return (
      <div>
        <Navbar light expand="md" className="MainNav">
          <NavbarBrand tag={Link} to="/dashboard">
            <img src={logo} className="logo" alt="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/dashboard">
                  Dashboard
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/take-the-test">
                  Take the test
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} onClick={this.logOut}>
                  Sign out
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Route
          path="/dashboard"
          render={(props) => <Dashboard {...props} />}
        />
        <Route
          path="/take-the-test"
          render={(props) => <TakeTest {...props} />}
        />
      </div>
    );
  }
}

export { MainNav };
