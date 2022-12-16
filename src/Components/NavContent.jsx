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
} from "react-bootstrap";
import "../Styles/navContent.css";
import Login from "./Login";
import Register from "./Register";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavContent = ({ search, setSearch, userLDb }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showRegister, setShowRegister] = useState(false);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  return (
    <Navbar
      collapseOnSelect
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
              onClick={() => setSearch("")}
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
                <Nav.Link as={Link} to="/" eventKey="1">
                  HOME
                </Nav.Link>
                {Object.keys(userLDb).length !== 0 &&
                  userLDb.rol === "admin" && (
                    <Nav.Link as={Link} to="/destacados" eventKey="2">
                      DESTACADO
                    </Nav.Link>
                  )}
                {Object.keys(userLDb).length !== 0 &&
                  userLDb.rol === "admin" && (
                    <Nav.Link as={Link} to="/usuariosLista" eventKey="3">
                      USUARIOS
                    </Nav.Link>
                  )}
                {Object.keys(userLDb).length !== 0 && (
                  <Nav.Link as={Link} to="/likes" eventKey="4">
                    ME GUSTA
                  </Nav.Link>
                )}
                <Nav.Link as={Link} to="/contacto" eventKey="5">
                  CONTACTO
                </Nav.Link>
                <Nav.Link as={Link} to="/nosotros" eventKey="6">
                  NOSOTROS
                </Nav.Link>
                {Object.keys(userLDb).length === 0 ? (
                  <p className="m-0" onClick={handleShow}>
                    INICIAR SESIÓN
                  </p>
                ) : (
                  <Link to="/usuario" className="m-0">
                    <img
                      className="logout-photo"
                      src={userLDb.photoProfile}
                      alt=""
                    />
                  </Link>
                )}
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
              <Form className="d-flex d-sm-none d-xl-none justify-content-center form-search">
                <Form.Control
                  type="text"
                  placeholder="Buscar"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Link to={`/search=${search}`}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Link>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavContent;
