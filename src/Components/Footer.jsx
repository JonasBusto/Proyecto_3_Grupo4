import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/footer.css";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer
        className="mt-auto"
        style={{
          width: "100%",
          marginTop: "1rem",
        }}
      >
        <Container fluid style={{ maxWidth: "1300px" }}>
          <Row className="d-flex">
            <Col
              className="d-flex justify-content-center logo-footer"
              xs={12}
              sm={6}
              md={4}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                <img
                  className="cursor-pointer-custom"
                  alt="logo_footer"
                  src="/logo-RollingTravel.png"
                  width="30%"
                  height="auto"
                />
              </Link>
            </Col>
            <Col
              className="d-flex flex-column justify-content-center icon-footer align-items-center"
              xs={12}
              sm={6}
              md={4}
            >
              <h2 className="text-light">SIGUENOS EN</h2>
              <div className="d-flex justify-content-between w-75 mt-2">
                <a
                  href="https://www.facebook.com/"
                  className="anchor-facebook anchon-icon-size"
                  target="blank"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="https://twitter.com/"
                  className="anchor-twitter anchon-icon-size"
                  target="blank"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="anchor-instagram anchon-icon-size"
                  target="blank"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </Col>
            <Col className="d-none d-md-block text-light p-5" md={4}>
              <h2 className="text-light">SOBRE NOSOTROS</h2>
              <ul>
                <li>
                  <Card.Text>03815555555</Card.Text>
                </li>
                <li>
                  <Card.Text>gruporeactfinal@gmail.com</Card.Text>
                </li>
                <li>
                  <Card.Text>Tucumán, Argentina</Card.Text>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className="text-center text-light copyright-footer">
          <h5>
            © Copyright 2022 Rolling Travel. Todos los derechos reservados.
          </h5>
        </div>
      </footer>
    </>
  );
};

export default Footer;
