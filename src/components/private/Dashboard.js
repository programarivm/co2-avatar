import React from 'react';
import {
  Container, Row, Col
} from 'reactstrap';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Container className="Dashboard">
          <Row>
            <Col lg="12">
              <h1>TODO: Dashboard</h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { Dashboard };
