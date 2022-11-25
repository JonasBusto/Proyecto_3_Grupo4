import React, { useState } from "react";
import { Container, Row, Form, Modal, Button } from "react-bootstrap";
import { Formik } from "formik";

const RecoverPass = () => {
  const [show, setShowPass] = useState(false);
  const [pass, setPass] = useState(false);

  const passClose = () => setPass(false);
  const passShow = () => setPass(true);
  const handleClosePass = () => setShowPass(false);
  const handleShowPass = () => setShowPass(true);
  return (
    <>
      <h1 className="text-center">
        <strong>Recuperar Contraseña</strong>
      </h1>
      <div
        style={{
          width: "100%",
          height: "100%",
          marginTop: "1rem",
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding: "50px",
            backgroundImage: "url(/paisaje-recoverPass.jpg)",
            height: "400px",
            width: "400px",
          }}
        >
          <Container
            style={{
              height: "250px",
              width: "250px",
            }}
          >
            <Row>
              <Formik
                initialValues={{ email: "" }}
                validate={(valores) => {
                  let errors = {};
                  if (!valores.email) {
                    errors.email = "Por favor ingrese su correo electrónico.";
                  } else if (
                    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                      valores.email
                    )
                  ) {
                    errors.email = "Ingrese un correo electrónico válido";
                  }
                  return errors;
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
                    <Form.Group className="mb-3 text-center">
                      <Form.Label className="text-dark rounded">
                        Correo Electronico
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Ingrese su correo electronico"
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        maxLength={20}
                      />
                      {touched.email && errors.email && (
                        <Form.Text className="text-danger">
                          <b>{errors.email}</b>
                        </Form.Text>
                      )}
                    </Form.Group>
                  </Form>
                )}
              </Formik>
            </Row>
            <Row>
              <Button
                style={{
                  backgroundColor: "#eb6440",
                }}
                onClick={handleShowPass}
              >
                Enviar código
              </Button>
            </Row>

            <Modal show={show}>
              <Modal.Body style={{ backgroundColor: "#d6e4e5" }}>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Introducir Código</Form.Label>
                    <Form.Control as="textarea" rows={1} />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <div className="d-flex justify-content-center m-2">
                <Button
                  style={{
                    backgroundColor: "#eb6440",
                  }}
                  onClick={() => {
                    handleClosePass();
                    passShow();
                  }}
                >
                  Verificar código
                </Button>
              </div>
            </Modal>
            <Modal show={pass} onHide={passClose} animation={false}>
              <Modal.Body style={{ backgroundColor: "#d6e4e5" }}>
                <Formik
                  initialValues={{ passNew: "", checkPassNew: "" }}
                  validate={(valores) => {
                    let errors = {};
                    if (!valores.passNew) {
                      errors.passNew = "Por favor ingrese su nueva contraseña.";
                    } else if (/\s/.test(valores.passNew)) {
                      errors.passNew = "La contraseña no puede tener espacios.";
                    }
                    if (!valores.checkPassNew) {
                      errors.checkPassNew =
                        "Por favor confirme su nueva contraseña.";
                    } else if (valores.passNew !== valores.checkPassNew) {
                      errors.checkPassNew = "Las contraseñas no coinciden.";
                    }

                    return errors;
                  }}
                  onSubmit={(valores, { resetForm }) => {
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
                      <Form.Group className="mb-3">
                        <Form.Label>Nueva Contraseña</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Ingrese su nueva contraseña"
                          value={values.passNew}
                          id="passNew"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          maxLength={15}
                        />
                        {touched.passNew && errors.passNew && (
                          <Form.Text className="text-danger">
                            <b>{errors.passNew}</b>
                          </Form.Text>
                        )}
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Confirmar nueva contraseña</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Confirme su contraseña"
                          id="checkPassNew"
                          value={values.checkPassNew}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          maxLength={15}
                        />
                        {touched.checkPassNew && errors.checkPassNew && (
                          <Form.Text className="text-danger">
                            <b>{errors.checkPassNew}</b>
                          </Form.Text>
                        )}
                      </Form.Group>
                    </Form>
                  )}
                </Formik>
              </Modal.Body>
              <div className="d-flex justify-content-center m-2">
                <Button
                  style={{
                    backgroundColor: "#eb6440",
                    marginRight: "10px",
                  }}
                  onClick={passClose}
                >
                  Cerrar
                </Button>
                <Button
                  style={{
                    backgroundColor: "#eb6440",
                  }}
                  onClick={passClose}
                >
                  Guardar Cambios
                </Button>
              </div>
            </Modal>
          </Container>
        </div>
      </div>
    </>
  );
};

export default RecoverPass;
