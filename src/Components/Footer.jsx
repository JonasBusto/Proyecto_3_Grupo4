import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../Styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div
        style={{
          border: "1px black solid",
          width: "100%",
          marginTop: "1rem",
          backgroundColor: "black",
        }}
      >
        <Container fluid>
          <Row className="d-flex">
            <Col
              className="d-flex pt-2 justify-content-center container-logo"
              xs={12}
              md={4}
              xl={4}
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
              className="d-flex pt-3 justify-content-around align-items-center container-icon-social"
              xs={12}
              md={4}
              xl={4}
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
            <Col className="d-none d-md-block text-light p-5" md={4} xl={4}>
              <ul>
                <li>
                  <Card.Text>03815555555</Card.Text>
                </li>
                <li>
                  <Card.Text>Rollig.Travel@gmail.com</Card.Text>
                </li>
                <li>
                  <Card.Text>Ubicacion</Card.Text>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Text className="text-center pt-4 text-light copyright-footer">
                Copyright Rolling Travel S.A.
              </Card.Text>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
