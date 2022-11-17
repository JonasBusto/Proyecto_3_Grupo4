import React, { useState, useEffect } from "react";
import { Container , Row , Col , InputGroup , Form } from "react-bootstrap";
import "../Styles/header.css";
import { AiOutlineZoomIn } from "react-icons/ai"

const Header = () => {
  return (
    <Container fluid className="header-color">
      <Container>
        <Row className="align-items-center">
          <Col
            xs={6}
            sm={6}
            md={4}
            className="d-flex justify-content-center  d-none d-sm-none d-md-flex container-logo"
          >
            <img alt="" src="/logo-RollingTravel.png" />
          </Col>
          <Col
            xs={12}
            sm={6}
            md={6}
            className="d-flex justify-content-center ps-3 d-md-none container-name"
          >
            <img src="/RollingTravel.png" alt="" />
          </Col>
          <Col
            md={4}
            className="d-flex justify-content-between d-none d-sm-none d-md-flex container-icon-social"
          >
            <img alt="" src="/icon-face-mini.png" />
            <img alt="" src="/icon-twet-mini.png" />
            <img alt="" src="/icon-insta-mini.png" />
          </Col>
          <Col
            xs={12}
            sm={6}
            md={4}
            className="d-flex justify-content-center ps-5 py-2 container-seeker"
          >
            <div>
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
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Header;


