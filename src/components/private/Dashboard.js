import React from 'react';
import {
  Container, Row, Col, Progress
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
    let percent = {
      food: Math.round(parseInt(this.state.food) * 100 / 300),
      residential: Math.round(parseInt(this.state.residential) * 100 / 300),
      transport: Math.round(parseInt(this.state.transport) * 100 / 300)
    };

    return (
      <div>
        <Container className="Dashboard">
          <h1 className="mt-5">Score: {parseInt(this.state.food) + parseInt(this.state.residential) + parseInt(this.state.transport)} points</h1>
          <Row>
            <Col lg="12">
              <div className="mt-2 text-center">Food {percent.food}%</div>
              <Progress className="mt-2" color="info" value={percent.food} />
              <div className="mt-5 text-center">Residential {percent.residential}%</div>
              <Progress className="mt-2" color="warning" value={percent.residential} />
              <div className="mt-5 text-center">Transport {percent.transport}%</div>
              <Progress className="mt-2" color="success" value={percent.transport} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { Dashboard };
