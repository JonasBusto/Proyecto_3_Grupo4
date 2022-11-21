import React, {useState} from 'react'
import { Form, Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLockKeyHoleOpen,
  faLock,
  faUser,

} from "@fortawesome/free-solid-svg-icons";
import "../Styles/register.css"

const Register = () => {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Registrarme
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="d-flex">
          <Modal.Title className="w-100 text-center">Registrarse</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center">
            <p className="fs-2">
              <b className="title-white">Bienvenido a</b>{" "}
              <b className="title-black">Rolling</b>
              <b className="title-orange">Travel</b>
            </p>
          </div>
          <Form>
            <Form.Group className="mb-3">
              <div className="d-flex">
                <div className="d-flex align-items-center justify-content-center color-icon">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <Form.Control type="text" placeholder="Nombre/s" />
              </div>
              <Form.Text className="text-muted">
               Ingrese un nombre válido.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <div className="d-flex">
                <div className="d-flex align-items-center justify-content-center color-icon">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <Form.Control type="text" placeholder="Apellido/s" />
              </div>
              <Form.Text className="text-muted">
                Ingrese un apellido válido.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <div className="d-flex">
                <div className="d-flex align-items-center justify-content-center color-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <Form.Control
                  type="email"
                  placeholder="Ingrese su correo electrónico."
                />
              </div>
              <Form.Text className="text-muted">
                Ingrese un correo electrónico válido.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <div className="d-flex">
                <div className="d-flex align-items-center justify-content-center color-icon">
                  <FontAwesomeIcon icon={faLock} />
                </div>
                <Form.Control
                  type="password"
                  placeholder="Ingrese su contraseña."
                />
              </div>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <div className="d-flex">
                <div className="d-flex align-items-center justify-content-center color-icon">
                  <FontAwesomeIcon icon={faLock} />
                </div>
                <Form.Control
                  type="password"
                  placeholder="Confirme su contraseña."
                />
              </div>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <div className="d-flex justify-content-center w-75 mx-auto">
              <button className="btn-init-custom" type="submit">
                Registrarme
              </button>
            </div>
          </Form>
          <div className="d-flex flex-column justify-content-center align-items-center text-center pt-3">
            <p>
              ¿Ya tienes una cuenta?
              <br />
              Inicia Sesion <b>Aquí.</b>
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Register