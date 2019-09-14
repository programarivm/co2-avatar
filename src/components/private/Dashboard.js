import React from 'react';
import {
  Container, Row, Col
} from 'reactstrap';

const BASE_URL = 'http://api.co2.today';

class Dashboard extends React.Component {
  componentDidMount() {
    console.log('hello there');
    fetch(BASE_URL + '/points', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      switch (res.status) {
        case 200:
          // TODO ...
          console.log(res);
          break;
        case 401:
          // TODO ...
          break;
        default:
          // do nothing
          break;
      }
    });
  }

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
