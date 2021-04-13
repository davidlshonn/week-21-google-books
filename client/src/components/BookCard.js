import React from "react";
// import { Container } from "react-bootstrap";
// import { Row } from "react-bootstrap";
// import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Cards({
  title,
  authors,
  thumbnail,
  subtitle,
  infoLink,
  description,
  Button,
}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button />
        <Card.Title>{authors}</Card.Title>
        <Card.Title>{subtitle}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <button variant="primary">{infoLink}</button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
