import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function SearchForm({ q, handleFormInput, handleSubmit }) {
  return (
    <Container>
      <Col>
        <Row>
          <input value={q} onChange={handleFormInput} />
          <button onClick={handleSubmit}>Search for Books</button>
        </Row>
      </Col>
    </Container>
  );
}

export default SearchForm;
