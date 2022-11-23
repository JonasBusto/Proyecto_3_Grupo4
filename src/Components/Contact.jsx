import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { Formik } from "formik";
import "../Styles/contact.css";

const Contact = () => {
  return (
    <Container fluid className="my-4">
      <h2 className="text-center pb-2">Contactanos</h2>
      <Row className="container-color m-0 mx-auto">
        <Col md={6} className="pe-3">
          <Form>
            <Form.Group className="pb-3">
              <Form.Control
                type="text"
                placeholder="Nombre/s"
                id="name"
                maxLength={30}
                //  value={values.name}
              />
            </Form.Group>
            <Form.Group className="pb-3">
              <Form.Control
                type="text"
                placeholder="Ingrese su correo electrónico."
                id="email"
                maxLength={35}
                //  value={values.name}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                as="textarea"
                row={3}
                placeholder="Ingrese su mensaje."
                id="message"
                maxLength={300}
                //  value={values.name}
              />
            </Form.Group>
            <button className="btn-send-contact">Enviar</button>
          </Form>
        </Col>
        <Col
          md={6}
          className="ps-3"
          style={{ border: "2px solid black", height:'13rem' }}
        ></Col>
      </Row>
    </Container>
  );
};

export default Contact;
