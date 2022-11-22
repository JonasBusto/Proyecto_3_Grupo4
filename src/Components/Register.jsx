import React, {useState} from 'react'
import { Form, Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../Styles/register.css'
import {
  faEnvelope,
  faLockKeyHoleOpen,
  faLock,
  faUser,

} from "@fortawesome/free-solid-svg-icons";
import "../Styles/register.css"
import { Formik } from 'formik';

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
          <Formik
            initialValues={{
              name: "",
              lastName: "",
              email: "",
              pass: "",
              checkPass: "",
            }}
            validate={(valores) => {
              let errors = {};

              if (!valores.name) {
                errors.name = "Por favor ingresa un nombre.";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
                errors.name = "Ingrese un nombre válido.";
              }

              if (!valores.lastName) {
                errors.lastName = "Por favor ingrese un apellido.";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.lastName)) {
                errors.lastName = "Ingrese un apellido válido";
              }

              if (!valores.email) {
                errors.email = "Por favor ingrese un correo electrónico.";
              } else if (
                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  valores.email
                )
              ) {
                errors.email = "Ingrese un correo electrónico válido";
              }

              // if (!valores.pass) {
              //   errors.pass = "Por favor ingrese un contraseña.";
              // } else if (
              //   !/^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,64}$/.test(
              //     valores.pass
              //   )
              // ) {
              //   errors.pass = "Ingrese una buena contraseña.";
              // }

              // if (!valores.checkPass) {
              //   errors.checkPass = "Por favor ingrese una contraseña.";
              // } else if (
              //   !/^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,64}$/.test(
              //     valores.checkPass
              //   )
              // ) {
              //   errors.checkPass = "Ingrese una buena contraseña.";
              // }

              return errors;
            }}
            onSubmit={(valores, {resetForm}) => {
              console.log(valores);
              console.log("formulario enviado.");
              resetForm()
            }}
          >
            {({
              values,
              errors,
              touched,
              handleSubmit,
              handleChange,
              handleBlur,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <div className="d-flex">
                    <div className="d-flex align-items-center justify-content-center color-icon">
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <Form.Control
                      type="text"
                      placeholder="Nombre/s"
                      id="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {touched.name && errors.name && (
                    <Form.Text className="text-danger">{errors.name}</Form.Text>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <div className="d-flex">
                    <div className="d-flex align-items-center justify-content-center color-icon">
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <Form.Control
                      type="text"
                      placeholder="Apellido/s"
                      id="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {touched.lastName && errors.lastName && (
                    <Form.Text className="text-danger">
                      {errors.lastName}
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <div className="d-flex">
                    <div className="d-flex align-items-center justify-content-center color-icon">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <Form.Control
                      type="email"
                      placeholder="Ingrese su correo electrónico."
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {touched.email && errors.email && (
                    <Form.Text className="text-danger">
                      {errors.email}
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <div className="d-flex">
                    <div className="d-flex align-items-center justify-content-center color-icon">
                      <FontAwesomeIcon icon={faLock} />
                    </div>
                    <Form.Control
                      type="password"
                      placeholder="Ingrese su contraseña."
                      id="pass"
                      value={values.pass}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {touched.pass && errors.pass && (
                    <Form.Text className="text-danger">{errors.pass}</Form.Text>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <div className="d-flex">
                    <div className="d-flex align-items-center justify-content-center color-icon">
                      <FontAwesomeIcon icon={faLock} />
                    </div>
                    <Form.Control
                      type="password"
                      placeholder="Confirme su contraseña."
                      id="checkPass"
                      value={values.checkPass}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {touched.checkPass && errors.checkPass && (
                    <Form.Text className="text-danger">
                      {errors.checkPass}
                    </Form.Text>
                  )}
                </Form.Group>
                <div className="d-flex justify-content-center w-75 mx-auto">
                  <button className="btn-init-custom" type="submit">
                    Registrarme
                  </button>
                </div>
              </Form>
            )}
          </Formik>
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