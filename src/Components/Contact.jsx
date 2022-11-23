import React from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'
import { Formik } from 'formik';

const Contact = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Formik>
            <Form>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Nombre/s"
                  id="name"
                  //  value={values.name}
                />
              </Form.Group>
            </Form>
          </Formik>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Contact