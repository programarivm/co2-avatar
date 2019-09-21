import React from 'react';
import {
  Container, Col, Progress, Row
} from 'reactstrap';
import Env from '../../constants/Env';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let avatars = fetch(Env.BASE_URL + '/avatars', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(res => {
        return res;
      });
    let results = fetch(Env.BASE_URL + '/results', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(res => {
        return res;
      });
    avatars.then(resAvatars => {
      results.then(resResults => {
        let avatar = resAvatars.find(item => item.id === resResults.id_avatar);
        this.setState({
          results: resResults,
          avatar: avatar
        });
      });
    });
  }

  render() {
    return (
      <Container className="Dashboard">
        {
          Object.keys(this.state).length === 0
            ? <p className="mt-5">
                Loading...
              </p>
            : <Row>
                <Col lg="6" className="text-center">
                  <h1 className="mt-5">
                    Your avatar is: {this.state.avatar.name}<br />
                    <img src={require(`../../assets/images/avatars/${this.state.avatar.image}`)} className="img-fluid" alt="avatar" />
                  </h1>
                </Col>
                <Col lg="6" className="text-center">
                  <h1 className="mt-5">{this.state.results.total} points</h1>
                  <div className="mt-2">Food {this.state.results.pct_food}%</div>
                  <Progress className="mt-2" color="info" value={this.state.results.pct_food} />
                  <div className="mt-5">Residential {this.state.results.pct_residential}%</div>
                  <Progress className="mt-2" color="warning" value={this.state.results.pct_residential} />
                  <div className="mt-5">Transport {this.state.results.pct_transport}%</div>
                  <Progress className="mt-2" color="success" value={this.state.results.pct_transport} />
                </Col>
                <h5 className="mt-3">{this.state.avatar.description}</h5>
              </Row>
        }
      </Container>
    );
  }
}

export { Dashboard };
