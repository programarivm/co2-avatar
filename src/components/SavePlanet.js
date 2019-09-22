import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Container, Row, Col
} from 'reactstrap';
import { NavLink } from "react-router-dom";
import { Footer } from "./Footer.js";
import earth from '../assets/images/earth.jpg';
import london from '../assets/images/london.jpg';
import bees from '../assets/images/bees.jpg';
import arctic from '../assets/images/arctic.jpeg';
import './SavePlanet.css';

class SavePlanet extends React.Component {
  render() {
    return (
      <div>
        <Container className="SavePlanet mt-5 mb-5">
          <Row>
            <Col lg="8">
              <h1 className="mt-5">Carbon Footprint</h1>
              <h5>We help you raise awareness about how much carbon dioxide (CO2) you are producing on a daily basis.</h5>
              <h5>Learn how to reduce your carbon footprint right now since there is no time to waste anymore.</h5>
              <NavLink className="mt-2 btn btn-secondary text-white" to="/take-the-test">Save the planet today!</NavLink>
            </Col>
            <Col lg="4">
              <figure className="swing">
                <img src={earth} className="img-fluid" alt="earth" />
              </figure>
            </Col>
          </Row>
          <Row className="mt-4 pb-5">
            <Col lg="12">
              <hr/>
              <h1 className="text-center mt-4">Did you know?</h1>
              <h2 className="text-center">Human species may die off sooner than you'd expect...</h2>
              <Row>
                <Col lg="4">
                  <a href="https://www.nationalgeographic.co.uk/environment-and-conservation201907londons-climate-will-resemble-barcelonas-2050-study-reveals" target="_blank" rel="noopener noreferrer">
                    <Card className="mt-3">
                      <CardImg top width="100%" src={london} alt="London" />
                      <CardBody>
                        <CardTitle>
                          <h5>London's climate will resemble Barcelona's by 2050</h5>
                        </CardTitle>
                        <CardText>In a little over 30 years, Londoners will swelter in the summer much like Barcelona does today.</CardText>
                      </CardBody>
                    </Card>
                  </a>
                </Col>
                <Col lg="4">
                  <a href="https://www.independent.co.uk/environment/bees-extinct-climate-change-habitat-loss-pollution-economy-wwf-a8921221.html" target="_blank" rel="noopener noreferrer">
                    <Card className="mt-3">
                      <CardImg top width="100%" src={bees} alt="Bees" />
                      <CardBody>
                        <CardTitle>
                          <h5>Dozens of bee species extinct or on verge of disappearing across UK, study finds</h5>
                        </CardTitle>
                        <CardText>Climate change, habitat loss, pollution and disease are threatening the pollinators, the analysis of 228 species concluded.</CardText>
                      </CardBody>
                    </Card>
                  </a>
                </Col>
                <Col lg="4">
                  <a href="https://www.scientificamerican.com/article/when-will-all-the-ice-in-the-arctic-be-gone/" target="_blank" rel="noopener noreferrer">
                    <Card className="mt-3">
                      <CardImg top width="100%" src={arctic} alt="Arctic" />
                      <CardBody>
                        <CardTitle>
                          <h5>When will all the ice in the Arctic be gone?</h5>
                        </CardTitle>
                        <CardText>This is a question often asked of sea-ice researchers by the media, the general public and policy makers—and no wonder.</CardText>
                      </CardBody>
                    </Card>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export { SavePlanet };
