import React, { useState } from "react";
import "../Styles/articlePage.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { faBookAtlas, faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-bootstrap/Modal";
import "../Styles/placesGrid.css";
import SpinnerLoad from "./SpinnerLoad";
import Swal from "sweetalert2";

const ArticlePage = ({ objectPlace, images, userLDb }) => {
  const [showDetails, setShowDetails] = useState(false);
  const handleCloseDetails = () => setShowDetails(false);
  const handleShowDetails = () => setShowDetails(true);

  const [showDescription, setShowDescription] = useState(false);
  const handleCloseDescription = () => setShowDescription(false);
  const handleShowDescription = () => setShowDescription(true);

  const [showImages, setShowImages] = useState(false);
  const handleCloseImages = () => setShowImages(false);
  const handleShowImages = () => setShowImages(true);

  const handleSubmitComment = (values) => {
    const date = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
    const dateTimeHAux =
      Number(new Date().toJSON().slice(11, 13).replace(/-/g, "/")) - 3;
    const dateTimeH = ("0" + dateTimeHAux).slice(-2);
    const dateTimeM = new Date().toJSON().slice(13, 16).replace(/-/g, "/");
    fetch(
      `https://proyecto-3-backend.vercel.app/addComment/${objectPlace._id}`,
      {
        method: "PUT",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          user: userLDb.name + " " + userLDb.lastName,
          userProfile: userLDb.photoProfile,
          date: date + " - " + dateTimeH + dateTimeM,
          infoComment: values.infoComment,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data.comments))
      .catch((error) => console.log("error: ", error));
    Swal.fire({
      title: "Gracias por comentar!!👏👏",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
    window.location.reload();
  };

  const handleSubmitChangeDetails = (values, resetForm) => {
    fetch(`https://proyecto-3-backend.vercel.app/modPlace/${objectPlace._id}`, {
      method: "PUT",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        province: values.province,
        category: values.category,
      }),
    });
    resetForm();
    alert("Detalles de lugar modificado");
    window.location.reload();
  };

  const handleSubmitChangeDescription = (values, resetForm) => {
    fetch(
      `https://proyecto-3-backend.vercel.app/modPlaceDescription/${objectPlace._id}`,
      {
        method: "PUT",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          description: values.description,
        }),
      }
    );
    resetForm();
    alert("Descripción modificada");
    window.location.reload();
  };

  const handleSubmitChangeIMG = (values, resetForm) => {
    fetch(
      `https://proyecto-3-backend.vercel.app/modPlaceImg/${objectPlace._id}`,
      {
        method: "PUT",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          img1: values.urlImg1,
          img2: values.urlImg2,
          img3: values.urlImg3,
          img4: values.urlImg4,
          img5: values.urlImg5,
        }),
      }
    );
    resetForm();
    alert("Imagenes modificadas");
    window.location.reload();
  };

  return (
    <>
      {objectPlace !== null ? (
        <div>
          <div
            className="div-presentation d-flex flex-column"
            style={{
              background: `url(${objectPlace.img.img1}) no-repeat center center`,
            }}
          >
            <div className="div-row">
              <div className="row m-0 h-100 mx-auto">
                <div className="col-12 col-md-8 d-flex align-items-center justify-content-center">
                  <div className="div-title-place">
                    <h1 className="title-place">
                      <b className="text-white">Todo</b>{" "}
                      <b className="text-black">sobre</b>{" "}
                      <b className="text-orange">{objectPlace.namePlace}</b>
                    </h1>
                    <p className="welcome-place text-center">
                      Conoce más sobre {objectPlace.namePlace} a continuación.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 d-none d-md-flex flex-column align-items-center justify-content-center div-detail-hero">
                  <div className="div-title-place2">
                    <p>
                      Valoracion: <b className="text-orange"></b>
                    </p>
                    <p>
                      Categoria:{" "}
                      <b className="text-orange">{objectPlace.category}</b>
                    </p>
                    <p>
                      Provincia:{" "}
                      <b className="text-orange">{objectPlace.province}</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="mx-2 p-anchor-head-links mt-3">
            <Link to="/">Home</Link>
            <b className="mx-2">/</b>
            <Link to="/lugares/todas/todas">Lugares</Link>
            <b className="mx-2">/</b>
            <span>{objectPlace.namePlace}</span>
          </p>
          <div className="mx-auto" style={{ maxWidth: "1300px" }}>
            {Object.keys(userLDb).length !== 0 && userLDb.rol === "admin" && (
              <div className="btns-admin">
                <h1 className="text-orange">Modificar atributos:</h1>
                <p>
                  Como administrador, elija la opción que considere necesario
                  modificar
                </p>
                <div className="row m-0 justify-content-center">
                  <button
                    onClick={handleShowDetails}
                    className="btn-admin-place col-12 col-sm-6 col-md-4 col-lg-2"
                  >
                    Detalles del lugar
                  </button>
                  <button
                    onClick={handleShowDescription}
                    className="btn-admin-place col-12 col-sm-6 col-md-4 col-lg-2"
                  >
                    Descripción
                  </button>
                  <button
                    onClick={handleShowImages}
                    className="btn-admin-place col-12 col-sm-6 col-md-4 col-lg-2"
                  >
                    Imagenes
                  </button>
                  <div>
                    <Modal
                      show={showDetails}
                      onHide={handleCloseDetails}
                      backdrop="static"
                      keyboard={false}
                    >
                      <Modal.Header className="modal-h-admin">
                        <Modal.Title>Detalles</Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="modal-b-admin">
                        <Formik
                          initialValues={{
                            category: objectPlace.category,
                            province: objectPlace.province,
                          }}
                          validate={(valuesInput) => {
                            let errors = {};

                            if (valuesInput.category === "") {
                              errors.category =
                                "Por favor, seleccione una categoria.";
                            }
                            if (valuesInput.province === "") {
                              errors.category =
                                "Por favor, seleccione una provincia.";
                            }

                            return errors;
                          }}
                          onSubmit={(valuesInput, { resetForm }) => {
                            handleSubmitChangeDetails(valuesInput, resetForm);
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
                              <div className="row m-0">
                                <p>
                                  Categoria seleccionada:{" "}
                                  {objectPlace.category.toUpperCase()}
                                </p>
                                <p>
                                  Provincia seleccionada:{" "}
                                  {objectPlace.province.toUpperCase()}
                                </p>
                                <div className="col-12 w-100 col-sm-6 col-lg-4 d-flex flex-column mt-1">
                                  <div className="d-flex align-items-center">
                                    <h5 className="m-0">Categoria:</h5>
                                    <Form.Select
                                      aria-label="Default select example"
                                      name="category"
                                      value={values.category}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                    >
                                      <option value="">Todas</option>
                                      <option value="playa">Playa</option>
                                      <option value="montaña">Montaña</option>
                                      <option value="selva">Selva</option>
                                      <option value="cataratas">
                                        Cataratas
                                      </option>
                                      <option value="llamativo">
                                        Llamativo
                                      </option>
                                      <option value="senderismo">
                                        Senderismo
                                      </option>
                                      <option value="historia">Historia</option>
                                      <option value="rural">Rural</option>
                                    </Form.Select>
                                  </div>
                                  {errors.category && touched.category && (
                                    <Form.Text className="text-muted">
                                      {errors.category}
                                    </Form.Text>
                                  )}
                                </div>
                                <div className="col-12 w-100 col-sm-6 col-lg-4 d-flex flex-column mt-3">
                                  <div className="d-flex align-items-center">
                                    <h5 className="m-0">Provincia:</h5>
                                    <Form.Select
                                      aria-label="Default select example"
                                      name="province"
                                      value={values.province}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                    >
                                      <option value="">Todas</option>
                                      <option value="Tucumán">Tucumán</option>
                                      <option value="Bs As">Bs As</option>
                                      <option value="Catamarca">
                                        Catamarca
                                      </option>
                                      <option value="misiones">Misiones</option>
                                      <option value="jujuy">Jujuy</option>
                                      <option value="chubut">Chubut</option>
                                      <option value="mendoza">Mendoza</option>
                                      <option value="la rioja">La Rioja</option>
                                      <option value="la pampa">La Pampa</option>
                                    </Form.Select>
                                  </div>
                                  {errors.province && touched.province && (
                                    <Form.Text className="text-muted">
                                      {errors.province}
                                    </Form.Text>
                                  )}
                                </div>
                              </div>
                              <div className="mt-3 d-flex justify-content-between w-75 mx-auto div-btn-admin-color">
                                <button
                                  onClick={(e) => {
                                    handleCloseDetails();
                                    e.preventDefault();
                                  }}
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

                  <div>
                    <Modal
                      show={showDescription}
                      onHide={handleCloseDescription}
                      backdrop="static"
                      keyboard={false}
                    >
                      <Modal.Header className="modal-h-admin">
                        <Modal.Title>Descripción</Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="modal-b-admin">
                        <Formik
                          initialValues={{
                            description: objectPlace.description,
                          }}
                          validate={(valuesInput) => {
                            let errors = {};

                            if (valuesInput.description.trim() === "") {
                              errors.description = "Campo 'Descripción' vacio.";
                            } else if (
                              valuesInput.description.trim().split("").length <
                                1 ||
                              valuesInput.description.trim().split("").length >
                                300
                            ) {
                              errors.description =
                                "La descripción debe tener entre 1 y 300 caracteres.";
                            }

                            return errors;
                          }}
                          onSubmit={(valuesInput, { resetForm }) => {
                            handleSubmitChangeDescription(
                              valuesInput,
                              resetForm
                            );
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
                              <div className="div-input-form">
                                <div className="div-input-form-icon d-flex justify-content-center align-items-center">
                                  <FontAwesomeIcon icon={faBookAtlas} />
                                </div>
                                <Form.Control
                                  as="textarea"
                                  rows={3}
                                  name="description"
                                  placeholder="Ingresar descripción"
                                  value={values.description}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                              </div>
                              {errors.description && touched.description && (
                                <Form.Text className="text-muted">
                                  {errors.description}
                                </Form.Text>
                              )}
                              <div className="mt-3 d-flex justify-content-between w-75 mx-auto div-btn-admin-color">
                                <button
                                  onClick={(e) => {
                                    handleCloseDescription();
                                    e.preventDefault();
                                  }}
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

                  <div>
                    <Modal
                      show={showImages}
                      onHide={handleCloseImages}
                      backdrop="static"
                      keyboard={false}
                    >
                      <Modal.Header className="modal-h-admin">
                        <Modal.Title>Imagenes</Modal.Title>
                      </Modal.Header>
                      <Modal.Body
                        className="modal-b-admin"
                        style={{ height: "20rem", overflow: "auto" }}
                      >
                        <Formik
                          initialValues={{
                            urlImg1: objectPlace.img.img1,
                            urlImg2: objectPlace.img.img2,
                            urlImg3: objectPlace.img.img3,
                            urlImg4: objectPlace.img.img4,
                            urlImg5: objectPlace.img.img5,
                          }}
                          validate={(valuesInput) => {
                            let errors = {};

                            if (valuesInput.urlImg1.trim() === "") {
                              errors.urlImg1 = "Por favor, ingrese una url";
                            }
                            if (valuesInput.urlImg2.trim() === "") {
                              errors.urlImg2 = "Por favor, ingrese una url";
                            }
                            if (valuesInput.urlImg3.trim() === "") {
                              errors.urlImg3 = "Por favor, ingrese una url";
                            }
                            if (valuesInput.urlImg4.trim() === "") {
                              errors.urlImg4 = "Por favor, ingrese una url";
                            }
                            if (valuesInput.urlImg5.trim() === "") {
                              errors.urlImg5 = "Por favor, ingrese una url";
                            }

                            return errors;
                          }}
                          onSubmit={(valuesInput, { resetForm }) => {
                            console.log("aaa");
                            handleSubmitChangeIMG(valuesInput, resetForm);
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
                                <p>Url Imagen 1: </p>
                                <div className="div-input-form">
                                  <div className="div-input-form-icon d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faImage} />
                                  </div>
                                  <Form.Control
                                    type="text"
                                    name="urlImg1"
                                    placeholder="Ingresar lugar"
                                    value={values.urlImg1}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                </div>
                                <div className="d-flex flex-column align-items-center mt-2">
                                  <img
                                    src={objectPlace.img.img1}
                                    className="img-fluid"
                                    alt=""
                                    style={{
                                      height: "15rem",
                                      width: "26rem",
                                      objectFit: "cover",
                                    }}
                                  />
                                  {errors.urlImg1 && touched.urlImg1 && (
                                    <Form.Text className="text-muted">
                                      {errors.urlImg1}
                                    </Form.Text>
                                  )}
                                </div>
                              </div>
                              <hr />
                              <div className="d-flex flex-column mt-2">
                                <p>Url Imagen 2: </p>
                                <div className="div-input-form">
                                  <div className="div-input-form-icon d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faImage} />
                                  </div>
                                  <Form.Control
                                    type="text"
                                    name="urlImg2"
                                    placeholder="Ingresar lugar"
                                    value={values.urlImg2}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                </div>
                                <div className="d-flex flex-column align-items-center mt-2">
                                  <img
                                    src={objectPlace.img.img2}
                                    className="img-fluid"
                                    alt=""
                                    style={{
                                      height: "15rem",
                                      width: "26rem",
                                      objectFit: "cover",
                                    }}
                                  />
                                  {errors.urlImg2 && touched.urlImg2 && (
                                    <Form.Text className="text-muted">
                                      {errors.urlImg2}
                                    </Form.Text>
                                  )}
                                </div>
                              </div>
                              <hr />
                              <div className="d-flex flex-column mt-2">
                                <p>Url Imagen 3: </p>
                                <div className="div-input-form">
                                  <div className="div-input-form-icon d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faImage} />
                                  </div>
                                  <Form.Control
                                    type="text"
                                    name="urlImg3"
                                    placeholder="Ingresar lugar"
                                    value={values.urlImg3}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                </div>
                                <div className="d-flex flex-column align-items-center mt-2">
                                  <img
                                    src={objectPlace.img.img3}
                                    className="img-fluid"
                                    alt=""
                                    style={{
                                      height: "15rem",
                                      width: "26rem",
                                      objectFit: "cover",
                                    }}
                                  />
                                  {errors.urlImg3 && touched.urlImg3 && (
                                    <Form.Text className="text-muted">
                                      {errors.urlImg3}
                                    </Form.Text>
                                  )}
                                </div>
                              </div>
                              <hr />
                              <div className="d-flex flex-column mt-2">
                                <p>Url Imagen 4: </p>
                                <div className="div-input-form">
                                  <div className="div-input-form-icon d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faImage} />
                                  </div>
                                  <Form.Control
                                    type="text"
                                    name="urlImg4"
                                    placeholder="Ingresar lugar"
                                    value={values.urlImg4}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                </div>
                                <div className="d-flex flex-column align-items-center mt-2">
                                  <img
                                    src={objectPlace.img.img4}
                                    className="img-fluid"
                                    alt=""
                                    style={{
                                      height: "15rem",
                                      width: "26rem",
                                      objectFit: "cover",
                                    }}
                                  />
                                  {errors.urlImg4 && touched.urlImg4 && (
                                    <Form.Text className="text-muted">
                                      {errors.urlImg4}
                                    </Form.Text>
                                  )}
                                </div>
                              </div>
                              <hr />
                              <div className="d-flex flex-column mt-2">
                                <p>Url Imagen 5: </p>
                                <div className="div-input-form">
                                  <div className="div-input-form-icon d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faImage} />
                                  </div>
                                  <Form.Control
                                    type="text"
                                    name="urlImg5"
                                    placeholder="Ingresar lugar"
                                    value={values.urlImg5}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                </div>
                                <div className="d-flex flex-column align-items-center mt-2">
                                  <img
                                    src={objectPlace.img.img5}
                                    className="img-fluid"
                                    alt=""
                                    style={{
                                      height: "15rem",
                                      width: "26rem",
                                      objectFit: "cover",
                                    }}
                                  />
                                  {errors.urlImg5 && touched.urlImg5 && (
                                    <Form.Text className="text-muted">
                                      {errors.urlImg5}
                                    </Form.Text>
                                  )}
                                </div>
                              </div>
                              <hr />
                              <div className="mt-3 d-flex justify-content-between mx-auto w-75 div-btn-admin-color">
                                <button
                                  type="button"
                                  onClick={(e) => handleCloseImages(e)}
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
              </div>
            )}
            <div className="mt-5">
              <div className="row m-0">
                <div className="col-12 col-lg-7">
                  <ImageGallery items={images} />
                </div>
                <div className="col-12 col-lg-5 d-flex flex-column">
                  <div className="mt-4 mt-lg-0">
                    <h1 className="text-orange">Descripcion</h1>
                    <p>{objectPlace.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2 d-block d-md-none div-box">
              <h1 className="text-orange">Detalles</h1>
              <p>1. Valoración: </p>
              <p>2. Categoria: {objectPlace.category} </p>
              <p>3. Provincia: {objectPlace.province}</p>
              <p>4. Me gusta: {objectPlace.contLikes}</p>
            </div>

            <div className="p-2 div-box">
              <div>
                <h1 className="text-orange">Comentarios</h1>
                <p>
                  Todas las opiniones han sido escritas por clientes reales que
                  han reservado con nosotros.
                </p>
              </div>
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
                      } else if (
                        valuesInput.infoComment.trim().split("").length < 5
                      ) {
                        errors.infoComment =
                          "El comentarios debe tener entre minimamente 5 caracteres";
                      }

                      return errors;
                    }}
                    onSubmit={(valuesInput, { resetForm }) => {
                      handleSubmitComment(valuesInput);
                      resetForm({});
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
              {objectPlace.comments.length !== 0 ? (
                objectPlace.comments.map((c, i) => (
                  <div className="mt-3 comment-box-custom" key={i + "comment"}>
                    <div className="row m-0">
                      <div className="col-2 div-user-comment p-0">
                        <img src={c.userProfileComment} alt="" />
                      </div>
                      <div className="col-10 d-flex flex-column div-comment-name p-0">
                        <div className="d-flex div-name-date">
                          <b className="title-name-user">{c.userComment}</b>
                          <b className="title-date-user">{c.dateComment}</b>
                        </div>
                        <p className="m-0">{c.infoComment}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h6>
                  No se realizaron comentarios. Haz uno, y se el primero en
                  hacerlo.
                </h6>
              )}
            </div>
          </div>
        </div>
      ) : (
        <SpinnerLoad />
      )}
    </>
  );
};

export default ArticlePage;
