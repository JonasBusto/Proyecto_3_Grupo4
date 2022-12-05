import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import "../Styles/contact.css";

const Contact = () => {
  return (
    <Container fluid className="my-4">
      <h2 className="text-center pb-2">CONTACTO</h2>
      <p className="mx-4 p-anchor-head-links">
        <Link to="/">Home</Link>
        <b className="mx-2">/</b>
        <Link to="/contacto">Contacto</Link>
      </p>
      <Row className="container-color m-0 mx-auto">
        <Col md={6} className="pe-3">
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            validate={(valuesAux) => {
              let errors = {};

              if (!valuesAux.name) {
                errors.name = "Por favor ingresa un nombre.";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valuesAux.name)) {
                errors.name = "Ingrese un nombre válido.";
              }

              if (!valuesAux.email) {
                errors.email = "Por favor ingrese un correo electrónico.";
              } else if (
                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  valuesAux.email
                )
              ) {
                errors.email = "Ingrese un correo electrónico válido";
              }

              if (!valuesAux.message) {
                errors.message = "Ingrese su mensaje por favor.";
              }

              return errors;
            }}
            onSubmit={(valuesAux, { resetForm }) => {
              resetForm();
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
                <Form.Group className="pb-3">
                  <Form.Control
                    type="text"
                    placeholder="Nombre"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={30}
                  />
                  {touched.name && errors.name && (
                    <Form.Text className="text-danger">{errors.name}</Form.Text>
                  )}
                </Form.Group>
                <Form.Group className="pb-3">
                  <Form.Control
                    type="text"
                    placeholder="Ingrese su correo electrónico."
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={35}
                  />
                  {touched.email && errors.email && (
                    <Form.Text className="text-danger">
                      {errors.email}
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    row={3}
                    placeholder="Ingrese su mensaje."
                    id="message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={200}
                  />
                  {touched.message && errors.message && (
                    <Form.Text className="text-danger">
                      {errors.message}
                    </Form.Text>
                  )}
                </Form.Group>
                <button className="btn-send-contact" type="submit">
                  Enviar
                </button>
              </Form>
            )}
          </Formik>
        </Col>
        <Col md={6}>
          <div className="container-google-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64912573.49076589!2d-48.817448999999996!3d6.776054200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1669241080068!5m2!1ses-419!2sar"
              style={{ border: 0 }}
              aria-hidden="false"
              tabIndex="0"
              className="google-map"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
