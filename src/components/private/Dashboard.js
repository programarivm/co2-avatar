import React from 'react';
import {
  Container, Row, Col, Table
} from 'reactstrap';

const BASE_URL = 'http://api.co2.today';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch(BASE_URL + '/points', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(res => {
        this.setState(res);
      });
  }

  render() {
    return (
      <div>
        <Container className="Dashboard">
          <Row>
            <Col lg="12">
              <Table>
                <thead>
                <tr>
                  <th>Food</th>
                  <th>Residential</th>
                  <th>Transport</th>
                </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.food}</td>
                    <td>{this.state.residential}</td>
                    <td>{this.state.transport}</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { Dashboard };
