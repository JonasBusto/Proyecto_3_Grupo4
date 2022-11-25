import { React } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../Styles/aboutUs.css";

const AboutUs = () => {
  return (
    <>
      <h1 className="mt-3 d-flex justify-content-center">Acerca de Nosotros</h1>
      <div className="mb-3">
        <Container>
          <Row>
            <Col className="d-flex justify-content-center align-items-center m-4">
              <Card
                style={{
                  minHeight: "30rem",
                  width: "18rem",
                  backgroundColor: "#d6e4e5",
                }}
              >
                <Card.Img
                  className="img-about"
                  variant="top"
                  src="/paisaje-recoverPass.jpg"
                />
                <h3 className="m-2 d-flex justify-content-center">
                  Mario David, Garcia
                </h3>
                <div className="m-2 d-flex justify-content-center">
                  <p>
                    <b style={{ color: "#eb6440" }}>Descripcion: </b>
                    <br /> <br />
                    <b style={{ color: "#eb6440" }}>Puesto: </b>
                    SCRUM MASTER
                  </p>
                </div>
              </Card>
            </Col>
            <Col className="d-flex justify-content-center align-items-center m-4">
              <Card
                style={{
                  minHeight: "30rem",
                  width: "18rem",
                  backgroundColor: "#d6e4e5",
                }}
              >
                <Card.Img
                  className="img-about"
                  variant="top"
                  src="/paisaje-recoverPass.jpg"
                />
                <h3 className="m-2 d-flex justify-content-center">
                  Kevin Jonas, Busto
                </h3>
                <div className="m-2 d-flex justify-content-center">
                  <p>
                    <b style={{ color: "#eb6440" }}>Descripcion: </b>
                    <br /> <br />
                    <b style={{ color: "#eb6440" }}>Puesto: </b>
                    TECH LEAD
                  </p>
                </div>
              </Card>
            </Col>
            <Col className="d-flex justify-content-center align-items-center m-4">
              <Card
                style={{
                  minHeight: "30rem",
                  width: "18rem",
                  backgroundColor: "#d6e4e5",
                }}
              >
                <Card.Img
                  className="img-about"
                  variant="top"
                  src="/Foto_Valentina.jpg"
                />
                <h3 className="m-2 d-flex justify-content-center">
                  Valentina, Giuliani
                </h3>
                <div className="m-2 d-flex justify-content-center">
                  <p>
                    <b style={{ color: "#eb6440" }}>Descripcion: </b>
                    Desarroladora Full-Stack (o eso intentamos) con ganas de
                    aprender todos los dias y comerme el mundo.
                    <br /> <br />
                    <b style={{ color: "#eb6440" }}>Puesto: </b>
                    EMPLEADA
                  </p>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
