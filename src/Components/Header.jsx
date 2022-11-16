import React, { useState, useEffect } from "react";
import { Container , Row , Col , InputGroup , Form } from "react-bootstrap";
import "../Styles/header.css";
import { AiOutlineZoomIn } from "react-icons/ai"

const Header = () => {
  return (
    <Container fluid className="header-color">
      <Container>
        <Row className="align-items-center">
          <Col xs={6} sm={6} md={4} className="d-flex justify-content-center">
            <img alt="" src="/logo-RollingTravel.png" width="80" height="80" />
          </Col>
          <Col
            md={4}
            className="d-flex justify-content-between d-none d-sm-none d-md-flex"
          >
            <img
              alt=""
              src="/icon-twet.png"
              width="70"
              height="70"
              className=""
            />
            <img
              alt=""
              src="/icon-face.png"
              width="70"
              height="70"
              className=""
            />
            <img
              alt=""
              src="/icon-insta.png"
              width="70"
              height="70"
              className=""
            />
          </Col>
          <Col
            xs={6}
            sm={6}
            md={4}
            className="d-flex justify-content-center px-md-5"
          >
            <InputGroup>
              <Form.Control
                placeholder="Buscar"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text>
                <AiOutlineZoomIn />
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Header;


