import React from 'react';
import {
  Col, Container, Row, Progress
} from 'reactstrap';
import { SocialMediaShare } from './SocialMediaShare.js';
import AppStore from '../stores/AppStore.js';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.setState(AppStore.getState());
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
                <Col lg="12">
                  <h4 className="mt-5">
                    Avatar: {this.state.avatar.name}<br />
                    Score: {this.state.total} points<br />
                    A tip for you: {this.state.tip}
                  </h4>
                </Col>
                <Col lg="6" className="text-center">
                  <h5 className="mt-2">
                    <img src={require(`../assets/images/avatars/${this.state.avatar.image}`)} className="img-fluid" alt="avatar" />
                  </h5>
                </Col>
                <Col lg="6" className="text-center">
                  <div className="mt-2">Food {this.state.pct_food}%</div>
                  <Progress className="mt-2" color="info" value={this.state.pct_food} />
                  <div className="mt-5">Residential {this.state.pct_residential}%</div>
                  <Progress className="mt-2" color="warning" value={this.state.pct_residential} />
                  <div className="mt-5">Transport {this.state.pct_transport}%</div>
                  <Progress className="mt-2" color="success" value={this.state.pct_transport} />
                </Col>
                <h5 className="mt-3">{this.state.avatar.description}</h5>
                <SocialMediaShare />
              </Row>
        }
      </Container>
    );
  }
}

export { Results };
