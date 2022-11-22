import React, {useState} from 'react'
import { Form,Modal,Button } from 'react-bootstrap'
import '../Styles/login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faLockKeyHoleOpen , faLock } from "@fortawesome/free-solid-svg-icons";
import { Formik } from "formik";

const Login = ({show, handleClose}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="d-flex">
          <Modal.Title className="w-100 text-center">
            Iniciar Sesion
          </Modal.Title>
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
              email: "",
              pass: "",
            }}
            validate={(valores) => {
              let errors = {};

              if (!valores.email) {
                errors.name =
                  "Por favor ingrese su correo electrónico para iniciar sesión.";
              } else if (
                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  valores.email
                )
              ) {
                console.log("correo no valido");
                errors.email = "Ingrese un correo electrónico válido";
              }

              if (!valores.pass) {
                errors.pass =
                  "Ingrese la contraseña para poder acceder a su cuenta.";
              }

              return errors;
            }}
            onSubmit={(valores) => {
              console.log(valores);
              console.log("Formulario enviado");
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
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <Form.Control
                      type="email"
                      placeholder="Ingrese su correo electrónico."
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={35}
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
                      maxLength={15}
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
                </div>
              </Form>
            )}
          </Formik>
          <div className="d-flex pt-2">
            <div>No tengo cuenta, quiero Registrarme.</div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login

