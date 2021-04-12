import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function Card({ title, authors, thumbnail, subtitle, infoLink, description }) {
  return (
    <Container fluid={true}>
      <Col>
        <Row className="justify-content-center">
          <h3>{title}</h3>
        </Row>
        <Row className="justify-content-center">
          <h5>{authors}</h5>
        </Row>
        <Row className="justify-content-center">
          <p>{subtitle}</p>
        </Row>
        <Row className="justify-content-center">
          <img src={thumbnail} />
        </Row>
        <Row className="justify-content-center">
          <p>{description}</p>
        </Row>
        <Row className="justify-content-center">
          <button>{infoLink}</button>
        </Row>
      </Col>
    </Container>
  );
}

export default Card;
