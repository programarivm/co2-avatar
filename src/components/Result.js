import React from 'react';
import {
  Container
} from 'reactstrap';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container className="Dashboard">
        <h1>Lorem ipsum dolor sit amet.</h1>
      </Container>
    );
  }
}

export { Result };
