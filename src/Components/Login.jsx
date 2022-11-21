import React, {useState} from 'react'
import { Form,Modal,Button } from 'react-bootstrap'
import '../Styles/login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faLockKeyHoleOpen , faLock } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Iniciar Sesión
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="d-flex">
          <Modal.Title className='w-100 text-center'>Iniciar Sesion</Modal.Title>
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
              <div className="container-aux">
                <div className="d-flex justify-content-end mb-1">
                  Olivé mi contraseña
                </div>
              </div>
            </Form.Group>
            <div className="d-flex justify-content-center w-75 mx-auto">
              <button className="btn-init-custom" type="submit">
                Iniciar Sesión
              </button>
              {/* <button onClick={handleClose} className="btn-close-custom">
                Cerra
              </button> */}
            </div>
          </Form>
          <div className='d-flex pt-2'>
            <div>No tengo cuenta, quiero  Registrarme.</div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login