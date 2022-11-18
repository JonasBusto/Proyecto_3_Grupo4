import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  Offcanvas,
  Form,
  Button,
} from "react-bootstrap";
import { GiShoppingCart } from "react-icons/gi";
import "../Styles/navContent.css";

const NavContent = () => {
  return (
    <Navbar expand="lg" className="navbar d-flex" style={{ width: "100%" }}>
      <Container>
        <Row className="justify-content-start">
          <Col className="d-flex">
            <p>
              <strong>Rolling</strong>
            </p>
            <p className="travel">
              <strong>Travel</strong>
            </p>
          </Col>
        </Row>
        <Row className="justify-content-end px-3">
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand`}
            aria-labelledby={`offcanvasNavbarLabel-expand`}
            placement="end"
            className="navbar-offcanvas"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                className="d-flex"
                id={`offcanvasNavbarLabel-expand`}
              >
                <p>
                  <strong>Rolling</strong>
                </p>
                <p className="travel">
                  <strong>Travel</strong>
                </p>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link
                  className="home-navbar"
                  style={{ color: "white" }}
                  href="#action1"
                >
                  Home
                </Nav.Link>
                <Nav.Link href="#action2">Destacado</Nav.Link>
                <Nav.Link href="#action2">Contacto</Nav.Link>
                <Nav.Link href="#action2">Me Gusta</Nav.Link>
                <Nav.Link href="#action2">Iniciar Sesion</Nav.Link>
                <Nav.Link href="#action2">
                  <h4 className="align-items-center">
                    <GiShoppingCart />
                  </h4>
                </Nav.Link>
              </Nav>
              <Form className="d-flex d-md-none d-xl-none">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-dark">Buscar</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavContent;
