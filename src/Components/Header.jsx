import React, { useState, useEffect } from "react";
import { Container , Row , Col , InputGroup , Form } from "react-bootstrap";
import "../Styles/header.css";

const Header = () => {
  return (
    <Container fluid className="header-color header-heigh">
      <Container>
        <Row>
          <Col>
            <Container className="d-flex align-items-center justify-content-center">
              <img src="/logo-RollingTravel.png" alt="" className="logo" />
            </Container>
          </Col>
          <Col className="container-icon d-flex justify-content-around ">
            <img src="/icon-twet.png" alt="" className="icon" />
            <img src="/icon-face.png" alt="" className="icon" />
            <img src="/icon-insta.png" alt="" className="icon" />
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <InputGroup className="py-2">
              <Form.Control
                placeholder="Buscar"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text id="basic-addon2">Lupa</InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Header;
