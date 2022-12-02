import React, { useState, useEffect } from "react";
import "../Styles/articlePage.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useParams } from "react-router";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import {
  faCheck,
  faBookAtlas,
  faLocationDot,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-bootstrap/Modal";
import "../Styles/placesGrid.css";

const ArticlePageDb = ({ objectPlace, images }) => {
  console.log("props objeto: ", objectPlace);

  const [comentarios, setComentarios] = useState([]);

  const [showDetails, setShowDetails] = useState(false);
  const handleCloseDetails = () => setShowDetails(false);
  const handleShowDetails = () => setShowDetails(true);

  const [showDescription, setShowDescription] = useState(false);
  const handleCloseDescription = () => setShowDescription(false);
  const handleShowDescription = () => setShowDescription(true);

  const [showImages, setShowImages] = useState(false);
  const handleCloseImages = () => setShowImages(false);
  const handleShowImages = () => setShowImages(true);

  const [showServices, setShowServices] = useState(false);
  const handleCloseServices = () => setShowServices(false);
  const handleShowIServices = () => setShowServices(true);

  const [showTips, setShowTips] = useState(false);
  const handleCloseTips = () => setShowTips(false);
  const handleShowTips = () => setShowTips(true);

  // const changeDetails = (cat, prov) => {
  //   let objAux = { ...objetoPrueba, categoria: cat, provincia: prov };
  //   setObjetoPrueba(objAux);
  // };

  // const changeDescription = (desc) => {
  //   let objAux = { ...objetoPrueba, descripcion: desc };
  //   setObjetoPrueba(objAux);
  // };
  // Object.keys(objetoPrueba).length !== 0
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
                    <p className="welcome-place">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias adipisci eum sint nihil, recusandae, impedit,
                    </p>
                    <div className="d-flex justify-content-center div-btn-see-more">
                      <button>Ver más</button>
                    </div>
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
                <button
                  onClick={handleShowIServices}
                  className="btn-admin-place col-12 col-sm-6 col-md-4 col-lg-2"
                >
                  Servicios
                </button>
                <button
                  onClick={handleShowTips}
                  className="btn-admin-place col-12 col-sm-6 col-md-4 col-lg-2"
                >
                  Tips
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
                            errors.province =
                              "Por favor, seleccione una provincia.";
                          }

                          return errors;
                        }}
                        onSubmit={(valuesInput, { resetForm }) => {
                          // changeDetails(
                          //   valuesInput.category,
                          //   valuesInput.province
                          // );
                          // resetForm({});
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
                                    name="categoria"
                                    value={values.category}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  >
                                    <option value="">Todas</option>
                                    <option value="playa">Playa</option>
                                    <option value="montaña">Montaña</option>
                                    <option value="selva">Selva</option>
                                    <option value="cataratas">Cataratas</option>
                                    <option value="llanura">Llanura</option>
                                    <option value="llamativo">Llamativo</option>
                                    <option value="campo">Campo</option>
                                    <option value="ciudad">Ciudad</option>
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
                                    name="provincia"
                                    value={values.province}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  >
                                    <option value="">Todas</option>
                                    <option value="Tucumán">Tucumán</option>
                                    <option value="Bs As">Bs As</option>
                                    <option value="Catamarca">Catamarca</option>
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
              </div>
            </div>
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
              <p>4. Me gusta: </p>
            </div>

            {/* ACA VAN LOS SERVICIOS Y TIPS */}

            <div className="p-2 div-box">
              <div>
                <h1 className="text-orange">Comentarios</h1>
                <p>
                  Todas las opiniones han sido escritas por clientes reales que
                  han reservado con nosotros.
                </p>
              </div>

              {/* ACA VAN LAS RESEÑAS HECHAS POR USUARIOS */}
            </div>

            {/* ACA VA LA CAJA DE COMENTARIOS */}
          </div>
        </div>
      ) : (
        <h1>cargando</h1>
      )}
    </>
  );
};

export default ArticlePageDb;
