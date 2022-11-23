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
    <Navbar
      expand="lg"
      sticky="top"
      className="navbar d-flex p-0"
      style={{ width: "100%" }}
    >
      <Container>
        <Row className="justify-content-start">
          <Col className="d-flex">
            <Link
              to="/"
              className="d-flex"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p className="m-0">
                <strong>Rolling</strong>
              </p>
              <p className="travel mx-1 m-0">
                <strong>Travel</strong>
              </p>
            </Link>
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
              <Nav className="justify-content-end nav-link-custom flex-grow-1 pe-3">
                <Link to="/">Home</Link>
                <Link to="/destacados">Destacado</Link>
                <Link to="/contacto">Contacto</Link>
                <Link to="/likes">Me Gusta</Link>
                <p className="m-0" onClick={handleShow}>
                  Iniciar Sesion
                </p>
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
