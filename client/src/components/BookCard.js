import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function Card({ title }) {
  return (
    <Container>
      <h3>{title}</h3>
    </Container>
  );
}

export default Card;
