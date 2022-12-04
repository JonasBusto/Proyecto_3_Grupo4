import React from "react";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";

const BoxComments = ({ userLDb }) => {
  const handleSubmitComment = (values, resetForm) => {
    const date = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
    const dateTimeHAux =
      Number(new Date().toJSON().slice(11, 13).replace(/-/g, "/")) - 3;
    const dateTimeH = ("0" + dateTimeHAux).slice(-2);
    const dateTimeM = new Date().toJSON().slice(13, 16).replace(/-/g, "/");
    fetch("https://proyecto-3-backend.vercel.app/addCommentHome", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: userLDb.name + " " + userLDb.lastName,
        userProfile: userLDb.photoProfile,
        date: date + " - " + dateTimeH + dateTimeM,
        infoComment: values.infoComment,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data.comments))
      .catch((error) => console.log("error: ", error));
    resetForm();
    alert("Comentario agregado");
    window.location.reload();
  };

  return (
    <>
      <div className="p-2 div-box">
        <h1 className="text-orange">Escribe tu reseña</h1>
        {Object.keys(userLDb).length !== 0 ? (
          <Formik
            initialValues={{
              infoComment: "",
            }}
            validate={(valuesInput) => {
              let errors = {};

              if (valuesInput.infoComment.trim() === "") {
                errors.infoComment = "Campo 'Reseña' vacio.";
              } else if (valuesInput.infoComment.trim().split("").length < 5) {
                errors.infoComment =
                  "El comentarios debe tener entre minimamente 5 caracteres";
              }

              return errors;
            }}
            onSubmit={(valuesInput, { resetForm }) => {
              handleSubmitComment(valuesInput, resetForm);
            }}
          >
            {({
              handleSubmit,
              errors,
              touched,
              values,
              handleChange,
              handleBlur,
            }) => (
              <Form onSubmit={handleSubmit} className="form-review">
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="infoComment"
                    placeholder="Ingresa tu comentario"
                    value={values.infoComment}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.infoComment && touched.infoComment && (
                    <Form.Text className="text-muted">
                      {errors.infoComment}
                    </Form.Text>
                  )}
                </Form.Group>
                <div className="mt-3 d-flex justify-content-end mx-2">
                  <button className="btn-add-review" type="submit">
                    Añadir
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        ) : (
          <h2>Debe iniciar sesión para comentar</h2>
        )}
      </div>
    </>
  );
};

export default BoxComments;
