import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import Login from "./Login";
import Register from "./Register";

const NavContent = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showRegister, setShowRegister] = useState(false);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

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
                <Link
                  to="/"
                  className="home-navbar"
                  style={{ color: "white" }}
                  href="#action1"
                >
                  Home
                </Link>
                <Link to="/destacados">Destacado</Link>
                <Link to="/contacto">Contacto</Link>
                <Link to="/likes">Me Gusta</Link>
                <Button onClick={handleShow}>Iniciar Sesion</Button>
                <Login
                  show={show}
                  handleClose={handleClose}
                  handleShow={handleShow}
                  handleShowRegister={handleShowRegister}
                />
                <Register
                  handleShow={handleShow}
                  handleShowRegister={handleShowRegister}
                  handleCloseRegister={handleCloseRegister}
                  showRegister={showRegister}
                />
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
