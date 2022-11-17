import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../Styles/footer.css";

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
              className="d-flex justify-content-center logo-footer"
              xs={12}
              md={4}
              xl={4}
            >
              <img
                src="/logo-RollingTravel.png"
                alt="Logo Rolling Travel"
                width="30%"
                height="auto"
              />
            </Col>
            <Col
              className="d-flex justify-content-between icon-footer align-items-center"
              xs={12}
              md={4}
              xl={4}
            >
              <img alt="" src="/icon-face-mini.png" width="10%" />
              <img alt="" src="/icon-twet-mini.png" width="10%" />
              <img alt="" src="/icon-insta-mini.png" width="10%" />
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
              <Card.Text className="text-center text-light copyright-footer">
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
