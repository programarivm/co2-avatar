import React from 'react';
import {
  Container, Row, Col, Progress
} from 'reactstrap';
import Env from '../../constants/Env';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch(Env.BASE_URL + '/results', {
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
          <h1 className="mt-5">Score: {this.state.total} points</h1>
          <Row>
            <Col lg="12">
              <div className="mt-2 text-center">Food {this.state.pct_food}%</div>
              <Progress className="mt-2" color="info" value={this.state.pct_food} />
              <div className="mt-5 text-center">Residential {this.state.pct_residential}%</div>
              <Progress className="mt-2" color="warning" value={this.state.pct_residential} />
              <div className="mt-5 text-center">Transport {this.state.pct_transport}%</div>
              <Progress className="mt-2" color="success" value={this.state.pct_transport} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { Dashboard };
