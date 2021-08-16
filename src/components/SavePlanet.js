import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from "react-router-dom";
import earth from '../assets/images/earth.jpg';
import './SavePlanet.css';

const SavePlanet = () => {
  return (
    <Container className="SavePlanet mt-5 mb-5">
      <Row>
        <Col lg="8">
          <h1 className="mt-5">Save the planet</h1>
          <h5>
            This app helps you raise awareness on how much CO2 you'd be producing on a regular basis. Learn tips to reduce your carbon footprint since there's no time to waste anymore.
          </h5>
          <NavLink className="mt-2 btn btn-secondary text-white" to="/take-the-test">Find out your CO2 avatar!</NavLink>
        </Col>
        <Col lg="4">
          <figure className="swing">
            <img src={earth} className="img-fluid" alt="earth" />
          </figure>
        </Col>
      </Row>
    </Container>
  );
}

export default SavePlanet;
