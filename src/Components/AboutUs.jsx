import { React } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/aboutUs.css";

const AboutUs = () => {
  return (
    <>
      <h1 className="mt-3 d-flex justify-content-center">Acerca de Nosotros</h1>
      <p className="mx-4 p-anchor-head-links">
        <Link to="/">Home</Link>
        <b className="mx-2">/</b>
        <Link to="/nosotros">Nosotros</Link>
      </p>
      <div className="mb-3">
        <Container>
          <Row className="row-custom-about-us">
            <Col className="d-flex justify-content-center align-items-center m-4">
              <Card
                style={{
                  minHeight: "30rem",
                  width: "18rem",
                }}
              >
                <Card.Img
                  className="img-about"
                  variant="top"
                  src="/fotoMario.jpeg"
                />
                <h3 className="d-flex mb-2 justify-content-center text-name-about-us">
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
                  src="/fotoJonas.jpeg"
                />
                <h3 className="mb-2 d-flex justify-content-center text-name-about-us">
                  Kevin Jonas, Busto
                </h3>
                <div className="m-2 d-flex justify-content-center">
                  <p>
                    <b style={{ color: "#eb6440" }}>Descripcion: </b>
                    Me gusta la programación y las matematicas.
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
                <h3 className="mb-2 d-flex justify-content-center text-name-about-us">
                  Valentina, Giuliani
                </h3>
                <div className="m-2 d-flex justify-content-center">
                  <p>
                    <b style={{ color: "#eb6440" }}>Descripcion: </b>
                    Desarroladora Full-Stack (o eso intentamos) con ganas de
                    aprender todos los dias y comerme el mundo.
                    <br /> <br />
                    <b style={{ color: "#eb6440" }}>Puesto: </b>
                    DEV FULLSTACK
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
