import React from 'react';
import {
  Collapse, Navbar, NavbarToggler,
  NavbarBrand, Nav, NavItem,
  NavLink } from 'reactstrap';
import { Link, Route, Redirect } from 'react-router-dom';
import { Home } from "./Home.js";
import { Features } from "./Features.js";
import { Faq } from "./Faq.js";
import { SignIn } from "./SignIn.js";

class NavBar extends React.Component {
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
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to="/home">
            <b>CO2 Footprint</b>
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
                <NavLink tag={Link} to="/features">
                  Features
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/faq">
                  FAQ
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/login">
                  Sign In
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
          path="/features"
          render={(props) => <Features {...props} />}
        />
        <Route
          path="/faq"
          render={(props) => <Faq {...props} />}
        />
        <Route
          path="/login"
          render={(props) => <SignIn {...props} />}
        />
      </div>
    );
  }
}

export { NavBar };
