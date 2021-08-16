import React from 'react';
import { Col, ListGroup, ListGroupItem, Row } from 'reactstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="Footer p-5">
      <Row>
        <Col lg="3"></Col>
        <Col lg="4">
          <h5>CO2 Avatar</h5>
          <p>
            Something here to give the footer a purpose!<br/>
            Company Number: 1234567890
          </p>
        </Col>
        <Col lg="3">
          <ListGroup flush>
            <ListGroupItem tag="a" href="https://github.com/programarivm/co2-avatar" >GitHub</ListGroupItem>
            <ListGroupItem tag="a" href="https://programarivm.medium.com/" >Medium</ListGroupItem>
            <ListGroupItem tag="a" href="https://twitter.com/programarivm" >Twitter</ListGroupItem>
          </ListGroup>
        </Col>
        <Col lg="4"></Col>
      </Row>
    </footer>
  );
}

export default Footer;
