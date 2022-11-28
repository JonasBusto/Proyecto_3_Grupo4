import React, { useState, useEffect } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import "../Styles/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLockKeyHoleOpen,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { Formik } from "formik";
import { Link } from "react-router-dom";

const Login = ({
  show,
  handleClose,
  handleShowRegister,
  authUser,
  setAuthUser,
}) => {
  const validateLogin = (valores, resetForm) => {
    let indexFound = JSON.parse(localStorage.getItem("Usuarios")).findIndex(
      (e) => e.email === valores.email && e.pass === valores.pass
    );

    if (indexFound >= 0) {
      if (
        JSON.parse(localStorage.getItem("Usuarios"))[indexFound].email !==
          valores.email ||
        JSON.parse(localStorage.getItem("Usuarios"))[indexFound].pass !==
          valores.pass
      ) {
        alert("Usuario o contraseña invalidos");
      } else {
        localStorage.setItem(
          "Autenticado",
          JSON.stringify({
            email: JSON.parse(localStorage.getItem("Usuarios"))[indexFound]
              .email,
            nombre: JSON.parse(localStorage.getItem("Usuarios"))[indexFound]
              .nombre,
            rol: JSON.parse(localStorage.getItem("Usuarios"))[indexFound].rol,
          })
        );
        setAuthUser(JSON.parse(localStorage.getItem("Autenticado")));
        handleClose();
        resetForm({});
      }
    }
  };

  useEffect(() => {}, [authUser]);

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
            <p className="fs-2 text-center">
              <b className="title-white">Bienvenido a</b>{" "}
              <Link
                onClick={handleClose}
                to="/"
                style={{ textDecoration: "none" }}
              >
                <b className="title-black cursor-pointer-custom">Rolling</b>
                <b className="title-orange cursor-pointer-custom">Travel</b>
              </Link>
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
                errors.email =
                  "Por favor ingrese su correo electrónico para iniciar sesión.";
              } else if (
                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  valores.email
                )
              ) {
                errors.email = "Ingrese un correo electrónico válido";
              }

              if (!valores.pass) {
                errors.pass =
                  "Ingrese la contraseña para poder acceder a su cuenta.";
              }

              return errors;
            }}
            onSubmit={(valores, { resetForm }) => {
              validateLogin(valores, resetForm);
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
                  {touched.pass && errors.pass && (
                    <Form.Text className="text-danger">{errors.pass}</Form.Text>
                  )}
                  <div className="container-aux">
                    <div className="d-flex mt-1 justify-content-end mb-1">
                      <Link
                        onClick={handleClose}
                        to="/recuperarContraseña"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Olivé mi contraseña
                      </Link>
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
          <div className="d-flex flex-column justify-content-center align-items-center text-center pt-3">
            <p>
              ¿No tienes una cuenta?
              <br />
              Registrate{" "}
              <b
                className="cursor-pointer-custom"
                onClick={() => {
                  handleClose();
                  handleShowRegister();
                }}
              >
                Aquí.
              </b>
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
