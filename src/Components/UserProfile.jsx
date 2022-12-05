import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";
import { faUser, faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/userProfile.css";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import SpinnerLoad from "./SpinnerLoad";
import Swal from "sweetalert2";

const UserProfile = ({ userLDb, setUserLDb }) => {
  const [showEditName, setShowEditName] = useState(false);
  const handleCloseEditName = () => setShowEditName(false);
  const handleShowEditName = () => setShowEditName(true);

  const [showEditImg, setShowEditImg] = useState(false);
  const handleCloseEditImg = () => setShowEditImg(false);
  const handleShowEditImg = () => setShowEditImg(true);

  const handleLogout = () => {
    fetch("https://proyecto-3-backend.vercel.app/logout", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: JSON.parse(localStorage.getItem("token")),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.removeItem("token");
        setUserLDb({});
      });
    Swal.fire("Sesión Cerrada");
    window.location.reload();
    window.location.href = "https://rolling-travel-2022.vercel.app/";
  };

  const changeImg = (values) => {
    fetch("https://proyecto-3-backend.vercel.app/userLogModImg", {
      method: "PUT",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: JSON.parse(localStorage.getItem("token")),
        photoProfile: values.photoProfile,
      }),
    }).then((res) => res.json());
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Foto de perfil modificada",
      showConfirmButton: false,
      timer: 1500,
    });
    window.location.reload();
  };

  const changeName = (values) => {
    fetch("https://proyecto-3-backend.vercel.app/userLogModName", {
      method: "PUT",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: JSON.parse(localStorage.getItem("token")),
        name: values.name,
        lastName: values.lastName,
      }),
    }).then((res) => res.json());
    alert("Nombre modificado");
    window.location.reload();
  };

  return (
    <>
      {Object.keys(userLDb).length !== 0 ? (
        <div className="div-user">
          <div className="row row-user-profile m-0 p-3">
            <div className="col-12 col-sm-4 col-img-user">
              <div className="col-img-user-page d-flex flex-column">
                <img className="img-fluid" src={userLDb.photoProfile} alt="" />
                <button className="btn-edit-img" onClick={handleShowEditImg}>
                  Editar Img
                </button>
              </div>
              <Modal
                show={showEditImg}
                onHide={handleCloseEditImg}
                backdrop="static"
              >
                <Modal.Header>
                  <Modal.Title>Foto de perfil</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Formik
                    initialValues={{
                      photoProfile: userLDb.photoProfile,
                    }}
                    validate={(valuesInput) => {
                      let errors = {};

                      if (valuesInput.photoProfile.trim() === "") {
                        errors.photoProfile = "Por favor, ingrese una url";
                      }

                      return errors;
                    }}
                    onSubmit={(valuesInput, { resetForm }) => {
                      changeImg(valuesInput);
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
                      <Form onSubmit={handleSubmit}>
                        <div className="d-flex flex-column mt-2">
                          <p>Url Foto de perfil: </p>
                          <div className="div-input-form">
                            <div className="div-input-form-icon d-flex justify-content-center align-items-center">
                              <FontAwesomeIcon icon={faImage} />
                            </div>
                            <Form.Control
                              type="text"
                              name="photoProfile"
                              placeholder="Ingresar foto de perfil"
                              value={values.photoProfile}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </div>
                          <div className="d-flex flex-column align-items-center mt-2">
                            <img
                              src={userLDb.photoProfile}
                              className="img-fluid"
                              alt=""
                              style={{
                                height: "14rem",
                                width: "14rem",
                                objectFit: "cover",
                              }}
                            />
                            {errors.photoProfile && touched.photoProfile && (
                              <Form.Text className="text-muted">
                                {errors.photoProfile}
                              </Form.Text>
                            )}
                          </div>
                          <div className="mt-3 d-flex justify-content-between mx-auto w-75 div-btn-admin-color">
                            <button
                              type="button"
                              onClick={(e) => handleCloseEditImg(e)}
                            >
                              Cancelar
                            </button>
                            <button type="submit">Guardar Cambios</button>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </Modal.Body>
              </Modal>
            </div>
            <div className="col-12 col-sm-8 d-flex flex-column div-content-user">
              <div className="d-flex align-items-center">
                <h4 className="m-0">
                  {(userLDb.name + " " + userLDb.lastName).toUpperCase()}
                </h4>
                <button onClick={handleShowEditName}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
              </div>
              <p className="mt-3">
                <b>Email:</b> {userLDb.email}
              </p>
              <div className="h-100 d-flex align-items-end">
                <button className="btn-logout-custom" onClick={handleLogout}>
                  Cerrar Sesión
                </button>
              </div>
            </div>
            <Modal
              show={showEditName}
              onHide={handleCloseEditName}
              backdrop="static"
            >
              <Modal.Header>
                <Modal.Title>Nombre/s y Apellido/s</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Nombre/s actual: {userLDb.name.toUpperCase()}</p>
                <p>Apellido/s actual: {userLDb.lastName.toUpperCase()}</p>
                <Formik
                  initialValues={{
                    name: userLDb.name,
                    lastName: userLDb.lastName,
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
                    } else if (
                      !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.lastName)
                    ) {
                      errors.lastName = "Ingrese un apellido válido";
                    }

                    return errors;
                  }}
                  onSubmit={(values, { resetForm }) => {
                    changeName(values);
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
                            maxLength={20}
                          />
                        </div>
                        {touched.name && errors.name && (
                          <Form.Text className="text-danger">
                            {errors.name}
                          </Form.Text>
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
                            maxLength={20}
                          />
                        </div>
                        {touched.lastName && errors.lastName && (
                          <Form.Text className="text-danger">
                            {errors.lastName}
                          </Form.Text>
                        )}
                      </Form.Group>
                      <div className="mt-3 d-flex justify-content-between mx-auto w-75 div-btn-admin-color">
                        <button
                          type="button"
                          onClick={(e) => handleCloseEditName(e)}
                        >
                          Cancelar
                        </button>
                        <button type="submit">Guardar Cambios</button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      ) : (
        <SpinnerLoad />
      )}
    </>
  );
};

export default UserProfile;
