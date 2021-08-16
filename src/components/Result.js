import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Col, Container, Row, Progress } from 'reactstrap';
import SocialMediaShare from './SocialMediaShare.js';

const Result = () => {
  const state = useSelector(state => state);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Container className="Dashboard">
      <Row>
        <Col lg="12">
          <h4 className="mt-5">
            Avatar: {state.test.result.avatar.name}<br />
            Score: {state.test.result.total} points<br />
            A tip for you: {state.test.result.tip}
          </h4>
        </Col>
        <Col lg="6" className="text-center">
          <h5 className="mt-2">
            <img src={require(`../assets/images/avatars/${state.test.result.avatar.image}`)} className="img-fluid" alt="avatar" />
          </h5>
        </Col>
        <Col lg="6" className="text-center">
          <div className="mt-2">Food {state.test.result.pct_food}%</div>
          <Progress className="mt-2" color="info" value={state.test.result.pct_food} />
          <div className="mt-5">Residential {state.test.result.pct_residential}%</div>
          <Progress className="mt-2" color="warning" value={state.test.result.pct_residential} />
          <div className="mt-5">Transport {state.test.result.pct_transport}%</div>
          <Progress className="mt-2" color="success" value={state.test.result.pct_transport} />
        </Col>
        <h5 className="mt-3">{state.test.result.avatar.description}</h5>
        <SocialMediaShare />
      </Row>
    </Container>
  );
}

export default Result;
