import React, { useState, useEffect } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import "../Styles/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLockKeyHoleOpen,
  faLock,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";
import { Formik } from "formik";
import { Link } from "react-router-dom";

const Login = ({ show, handleClose, handleShowRegister }) => {
  const [dbUsers, setDbUsers] = useState([]);
  const [contraseñaVisible, setContraseñaVisible] = useState(false);
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    fetch(`https://proyecto-3-backend.vercel.app/consultUsers`)
      .then((res) => res.json())
      .then((json) => setDbUsers(json));
  }, []);

  const handleSubmitLogin = (values) => {
    fetch("https://proyecto-3-backend.vercel.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        token,
      },
      body: JSON.stringify({
        email: values.email,
        password: values.pass,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "ok") {
          localStorage.setItem("token", JSON.stringify(res.user.token));
          alert("Login exitoso");
          window.location.reload();
        } else {
          alert("El usuario y/o contraseña son invalidos");
        }
      });
  };

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
                errors.pass = "Por favor ingrese un contraseña.";
              } else if (/\s/.test(valores.pass)) {
                errors.pass = "La contraseña no puede tener espacios.";
              } else if (
                valores.pass.split("").length < 8 ||
                valores.pass.split("").length > 14
              ) {
                errors.pass =
                  "La contraseña debe tener entre 8 y 14 caracteres.";
              }

              return errors;
            }}
            onSubmit={(values, { resetForm }) => {
              handleSubmitLogin(values);
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
                    <div
                      className="d-flex align-items-center justify-content-center color-icon"
                      onClick={() => setContraseñaVisible(!contraseñaVisible)}
                      style={{ cursor: "pointer" }}
                    >
                      <FontAwesomeIcon
                        icon={contraseñaVisible ? faLockOpen : faLock}
                      />
                    </div>
                    <Form.Control
                      type={contraseñaVisible ? "text" : "password"}
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
                        to="/errorNoEncontrado"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Olvidé mi contraseña
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
