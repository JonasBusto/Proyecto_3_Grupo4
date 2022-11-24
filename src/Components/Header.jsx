import React, { useState, useEffect } from "react";
import { Container , Row , Col , InputGroup , Form } from "react-bootstrap";
import "../Styles/header.css";
import { AiOutlineZoomIn } from "react-icons/ai"
import { Link } from "react-router-dom"

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
            <Link to="/" style={{ textDecoration: "none" }}>
              <img
                className="cursor-pointer-custom"
                alt=""
                src="/logo-RollingTravel.png"
              />
            </Link>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={6}
            className="d-flex py-3 justify-content-center align-items-center d-md-none"
          >
            <p className=" fs-2 d-flex justify-content-center m-0 align-items-center">
              <Link to="/" style={{ textDecoration: "none" }}>
                <b className="title-black cursor-pointer-custom">Rolling</b>
                <b className="title-white cursor-pointer-custom">Travel</b>
              </Link>
            </p>
          </Col>
          <Col
            md={4}
            className="d-flex justify-content-between d-none d-sm-none d-md-flex container-icon-social"
          >
            <a href="https://www.facebook.com/" target="blank">
              <img alt="" src="/icon-face-mini.png" />
            </a>
            <a href="https://twitter.com/" target="blank">
              <img alt="" src="/icon-twet-mini.png" />
            </a>
            <a href="https://www.instagram.com/" target="blank">
              <img alt="" src="/icon-insta-mini.png" />
            </a>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={4}
            className="d-flex justify-content-center ps-5 py-2 d-none d-sx-none d-sm-flex container-seeker"
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


