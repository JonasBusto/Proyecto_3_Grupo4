import React, { useState, useEffect } from "react";
import { Container, Row, Col, InputGroup, Form } from "react-bootstrap";
import "../Styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Header = ({ search, setSearch }) => {
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
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                onClick={() => setSearch("")}
              >
                <b className="title-black cursor-pointer-custom">Rolling</b>
                <b className="title-white cursor-pointer-custom">Travel</b>
              </Link>
            </p>
          </Col>
          <Col
            md={4}
            className="d-flex justify-content-between d-none d-sm-none d-md-flex container-icon-social"
          >
            <a
              href="https://www.facebook.com/"
              className="anchor-facebook"
              target="blank"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://twitter.com/"
              className="anchor-twitter"
              target="blank"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.instagram.com/"
              className="anchor-instagram"
              target="blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={4}
            className="d-flex justify-content-center ps-5 py-2 d-none d-sx-none d-sm-flex container-seeker"
          >
            <Form className="d-flex form-search">
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Buscar lugar"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Form.Group>
              <Link to={`/search=${search}`}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Header;
