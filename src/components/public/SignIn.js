import React, { Component } from 'react';
import {
  Button, Card, CardBody,
  Container, Col, Row, Form,
  FormGroup, Input
} from 'reactstrap';
import AppActions from '../../actions/AppActions.js';
import './SignIn.css';

class SignIn extends Component {
  constructor(props) {
    super(props);
      this.state = {
        'email': '',
        'password': ''
    }
    this.logIn = this.logIn.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  logIn(e) {
    // e.preventDefault();
    AppActions.logIn(this.state);
  }

  render() {
    return (
      <Container className="SignIn mt-5">
        <Row>
          <Col lg="3"></Col>
          <Col lg="6">
            <Card>
              <CardBody>
                <p className="text-center"><b>Log in to your account</b></p>
                <Form className="form" onSubmit={ (e) => this.logIn(e) }>
                  <FormGroup>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email address"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <Button color="primary" onClick={this.logIn} block>Log in</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3"></Col>
        </Row>
      </Container>
    );
  }
}

export { SignIn };
