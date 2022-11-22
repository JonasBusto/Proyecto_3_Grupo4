import React, { useState, useEffect } from "react";
import "../Styles/articlePage.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";
import {
  faCheck,
  faBookAtlas,
  faLocationDot,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-bootstrap/Modal";
import "../Styles/placesGrid.css";

const ArticlePage = () => {
  const content = {
    id: 0,
    lugar: "Simoca",
    provincia: "Tucumán",
    categoria: "montaña",
    descripcion:
      "Simoca tiene un origen quechua “Shimukay”, que significa lugar de gente tranquila y silenciosa o lugar de paz y silencio. La ciudad está ubicada en el sudeste de la provincia a 50 kilómetros de San Miguel de Tucumán sobre la Ruta Nacional Nº 157. Conocida como la Capital Nacional del Sulky, es una localidad orgullosa de sus tradiciones cuyo exponente más auténtico es la feria de los sábados. En ella, los vendedores acuden a ofrecer los más diversos productos que van desde las exquisitas comidas regionales, artesanías, miel de caña, empanadillas y rosquetes, hasta artículos importados y cigarrillos en chalas. Durante el mes de Julio, se realiza una verdadera fiesta que trascendió las fronteras de la provincia y del país, la Fiesta Nacional de la Feria. La misma nació en el año 1980 con motivo de homenaje al pueblo simoqueño. Al comienzo de la fiesta, se realiza un desfile de Sulkys y de caballería gaucha representando un testimonio viviente de la historia del país. Otra celebración importante de Simoca, es la Fiesta Nacional del Sulky. Realizada a fines de noviembre, todos los años convoca a destacadas figuras del canto folklórico nacional y local acompañados del pintoresco y ya tradicional desfile de sulkys, carros y carretas por las calles de la ciudad. En el paseo por la ciudad, se puede visitar la Plaza Bartolomé Mitre, la Iglesia La Merced, antigua estación de trenes. También se puede realizar un paseo en Sulky y el Paseo del Bicentenario donde hay una réplica de la casa histórica. Simoca ofrece opciones de hospedaje, comercios de todo tipo y una variada gama de locales gastronómicos",
    img: {
      img1: "https://cdn-sp.radionacional.com.ar/wp-content/uploads/2020/01/Simoca.jpg",
      img2: "https://upload.wikimedia.org/wikipedia/commons/2/22/Tucuman_Simoca_Plaza.JPG",
      img3: "https://mapio.net/images-p/42423331.jpg",
      img4: "https://media.elpatagonico.com/p/ee309b8bcd5453f7af74287b020b7f4b/adjuntos/193/imagenes/010/199/0010199640/1200x675/smart/simoca2jpg.jpg",
      img5: "https://www.tucumanturismo.gob.ar/carga/image/festival%20sulky.jpg",
    },
    servicios: [
      "Llevar agua para mantenerse hidratados y evitar apunamiento.",
      "Podes elegir la opción de agregar el adicional al fabuloso cerro de los 14 colores. En este caso, podes comprar el tour completo a Serranías del Hornocal.",
      " Los restaurantes para los almuerzos en los destinos son a elección de los pasajeros. Las comidas no están incluidas.",
      "Las excursiones pueden brindarse en buses de hasta 45 personas, en ese caso se coordinara punto de encuentro.",
      "La salida para las excursiones puede ser con búsqueda por su hotel, en distintos puntos de encuentro a consultar o desde la oficina del operador local en pleno centro.",
    ],
    tips: [
      "Llevar agua para mantenerse hidratados y evitar apunamiento.",
      "Podes elegir la opción de agregar el adicional al fabuloso cerro de los 14 colores. En este caso, podes comprar el tour completo a Serranías del Hornocal.",
      " Los restaurantes para los almuerzos en los destinos son a elección de los pasajeros. Las comidas no están incluidas.",
      "Las excursiones pueden brindarse en buses de hasta 45 personas, en ese caso se coordinara punto de encuentro.",
      "La salida para las excursiones puede ser con búsqueda por su hotel, en distintos puntos de encuentro a consultar o desde la oficina del operador local en pleno centro.",
    ],
    liked: false,
  };

  const [objetoPrueba, setObjetoPrueba] = useState(content);
  const [comentarios, setComentarios] = useState([]);
  const images = [
    {
      original: objetoPrueba.img.img1,
      thumbnail: objetoPrueba.img.img1,
    },
    {
      original: objetoPrueba.img.img2,
      thumbnail: objetoPrueba.img.img2,
    },
    {
      original: objetoPrueba.img.img3,
      thumbnail: objetoPrueba.img.img3,
    },
    {
      original: objetoPrueba.img.img4,
      thumbnail: objetoPrueba.img.img4,
    },
    {
      original: objetoPrueba.img.img5,
      thumbnail: objetoPrueba.img.img5,
    },
  ];

  let objInitial = {};

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

  const changeDetails = (cat, prov) => {
    let objAux = { ...objetoPrueba, categoria: cat, provincia: prov };
    setObjetoPrueba(objAux);
  };

  const changeDescription = (desc) => {
    let objAux = { ...objetoPrueba, descripcion: desc };
    setObjetoPrueba(objAux);
  };

  return (
    <>
      <div>
        <div
          className="div-presentation d-flex flex-column"
          style={{
            background: `url(${objetoPrueba.img.img1}) no-repeat center center`,
          }}
        >
          <div className="div-row">
            <div className="row m-0 h-100 mx-auto">
              <div className="col-12 col-md-8 d-flex align-items-center justify-content-center">
                <div className="div-title-place">
                  <h1 className="title-place">
                    <b className="text-white">Todo</b>{" "}
                    <b className="text-black">sobre</b>{" "}
                    <b className="text-orange">{objetoPrueba.lugar}</b>
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
                    <b className="text-orange">{objetoPrueba.categoria}</b>
                  </p>
                  <p>
                    Provincia:{" "}
                    <b className="text-orange">{objetoPrueba.provincia}</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-5" style={{ maxWidth: "1300px" }}>
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
                        categoria: objetoPrueba.categoria,
                        provincia: objetoPrueba.provincia,
                      }}
                      validate={(valuesInput) => {
                        let errors = {};

                        if (valuesInput.categoria === "") {
                          errors.categoria =
                            "Por favor, seleccione una categoria.";
                        }
                        if (valuesInput.provincia === "") {
                          errors.provincia =
                            "Por favor, seleccione una provincia.";
                        }

                        return errors;
                      }}
                      onSubmit={(valuesInput, { resetForm }) => {
                        changeDetails(
                          valuesInput.categoria,
                          valuesInput.provincia
                        );
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
                              {objetoPrueba.categoria.toUpperCase()}
                            </p>
                            <p>
                              Provincia seleccionada:{" "}
                              {objetoPrueba.provincia.toUpperCase()}
                            </p>
                            <div className="col-12 w-100 col-sm-6 col-lg-4 d-flex flex-column mt-1">
                              <div className="d-flex align-items-center">
                                <h5 className="m-0">Categoria:</h5>
                                <Form.Select
                                  aria-label="Default select example"
                                  name="categoria"
                                  value={values.categoria}
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
                              {errors.categoria && touched.categoria && (
                                <Form.Text className="text-muted">
                                  {errors.categoria}
                                </Form.Text>
                              )}
                            </div>
                            <div className="col-12 w-100 col-sm-6 col-lg-4 d-flex flex-column mt-3">
                              <div className="d-flex align-items-center">
                                <h5 className="m-0">Provincia:</h5>
                                <Form.Select
                                  aria-label="Default select example"
                                  name="provincia"
                                  value={values.provincia}
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
                              {errors.provincia && touched.provincia && (
                                <Form.Text className="text-muted">
                                  {errors.provincia}
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
                        descripcion: objetoPrueba.descripcion,
                      }}
                      validate={(valuesInput) => {
                        let errors = {};

                        if (valuesInput.descripcion.trim() === "") {
                          errors.descripcion = "Campo 'Descripción' vacio.";
                        } else if (
                          valuesInput.descripcion.trim().split("").length < 1 ||
                          valuesInput.descripcion.trim().split("").length > 300
                        ) {
                          errors.descripcion =
                            "La descripción debe tener entre 1 y 300 caracteres.";
                        }

                        return errors;
                      }}
                      onSubmit={(valuesInput, { resetForm }) => {
                        changeDescription(valuesInput.descripcion);
                        // handleCloseDescription();
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
                        <Form onSubmit={handleSubmit}>
                          <div className="div-input-form">
                            <div className="div-input-form-icon d-flex justify-content-center align-items-center">
                              <FontAwesomeIcon icon={faBookAtlas} />
                            </div>
                            <Form.Control
                              as="textarea"
                              rows={3}
                              name="descripcion"
                              placeholder="Ingresar descripción"
                              value={values.descripcion}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </div>
                          {errors.descripcion && touched.descripcion && (
                            <Form.Text className="text-muted">
                              {errors.descripcion}
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
                        urlImg1: objetoPrueba.img.img1,
                        urlImg2: objetoPrueba.img.img2,
                        urlImg3: objetoPrueba.img.img3,
                        urlImg4: objetoPrueba.img.img4,
                        urlImg5: objetoPrueba.img.img5,
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
                        resetForm();
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
                        <Form onClick={handleSubmit}>
                          <div className="d-flex flex-column mt-2">
                            <p>Url Imagen 1: </p>
                            <div className="div-input-form">
                              <div className="div-input-form-icon d-flex justify-content-center align-items-center">
                                <FontAwesomeIcon icon={faImage} />
                              </div>
                              <Form.Control
                                type="text"
                                name="lugar"
                                placeholder="Ingresar lugar"
                                value={values.urlImg1}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </div>
                            <div className="d-flex flex-column align-items-center mt-2">
                              <img
                                src={objetoPrueba.img.img1}
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
                                name="lugar"
                                placeholder="Ingresar lugar"
                                value={values.urlImg2}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </div>
                            <div className="d-flex flex-column align-items-center mt-2">
                              <img
                                src={objetoPrueba.img.img2}
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
                                name="lugar"
                                placeholder="Ingresar lugar"
                                value={values.urlImg3}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </div>
                            <div className="d-flex flex-column align-items-center mt-2">
                              <img
                                src={objetoPrueba.img.img3}
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
                                name="lugar"
                                placeholder="Ingresar lugar"
                                value={values.urlImg4}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </div>
                            <div className="d-flex flex-column align-items-center mt-2">
                              <img
                                src={objetoPrueba.img.img4}
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
                                name="lugar"
                                placeholder="Ingresar lugar"
                                value={values.urlImg5}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </div>
                            <div className="d-flex flex-column align-items-center mt-2">
                              <img
                                src={objetoPrueba.img.img5}
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

              <div>
                <Modal
                  show={showServices}
                  onHide={handleCloseServices}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header className="modal-h-admin">
                    <Modal.Title>Servicios</Modal.Title>
                  </Modal.Header>
                  <Modal.Body
                    className="modal-b-admin"
                    style={{ height: "20rem", overflow: "auto" }}
                  >
                    <Formik>
                      {({
                        handleSubmit,
                        errors,
                        touched,
                        values,
                        handleChange,
                        handleBlur,
                      }) => (
                        <Form>
                          <div>
                            {objetoPrueba.servicios.map((s, i) => (
                              <div
                                key={"servicio" + i}
                                className="d-flex flex-column mb-3"
                              >
                                <p className="mb-1">Servicio {i + 1}</p>
                                <div className="div-input-form">
                                  <div className="div-input-form-icon d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faImage} />
                                  </div>
                                  <Form.Control
                                    as="textarea"
                                    row={3}
                                    name="lugar"
                                    placeholder="Ingresar servicio"
                                    value={s}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </Form>
                      )}
                    </Formik>
                    <div className="mt-3 d-flex justify-content-between w-75 mx-auto div-btn-admin-color">
                      <button onClick={handleCloseServices}>Cancelar</button>
                      <button>Guardar Cambios</button>
                    </div>
                  </Modal.Body>
                </Modal>
              </div>

              <div>
                <Modal
                  show={showTips}
                  onHide={handleCloseTips}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header className="modal-h-admin">
                    <Modal.Title>Tips</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="modal-b-admin">
                    <Formik>
                      {({
                        handleSubmit,
                        errors,
                        touched,
                        values,
                        handleChange,
                        handleBlur,
                      }) => (
                        <Form>
                          <div>
                            {objetoPrueba.tips.map((t, i) => (
                              <div
                                key={"servicio" + i}
                                className="d-flex flex-column mb-3"
                              >
                                <p className="mb-1">Tip {i + 1}</p>
                                <div className="div-input-form">
                                  <div className="div-input-form-icon d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon={faImage} />
                                  </div>
                                  <Form.Control
                                    as="textarea"
                                    row={3}
                                    name="tip"
                                    placeholder="Ingresar tip"
                                    value={t}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </Form>
                      )}
                    </Formik>
                    <div className="mt-3 d-flex justify-content-between w-75 mx-auto div-btn-admin-color">
                      <button onClick={handleCloseTips}>Cancelar</button>
                      <button>Guardar Cambios</button>
                    </div>
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
                  <p>{objetoPrueba.descripcion}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 d-block d-md-none div-box">
            <h1 className="text-orange">Detalles</h1>
            <p>1. Valoración: </p>
            <p>2. Categoria: {objetoPrueba.categoria} </p>
            <p>3. Provincia: {objetoPrueba.provincia}</p>
            <p>4. Me gusta: </p>
          </div>
          <div className="p-2 div-box">
            <h1 className="text-orange">Servicios</h1>
            {objetoPrueba.servicios.map((s, i) => (
              <div key={"servicio" + i} className="d-flex div-tips">
                <FontAwesomeIcon icon={faCheck} />
                <p>{s}</p>
              </div>
            ))}
          </div>
          <div className="p-2 div-box">
            <h1 className="text-orange">Tips</h1>
            {objetoPrueba.tips.map((t, i) => (
              <div key={"tips" + i} className="d-flex div-tips">
                <FontAwesomeIcon icon={faCheck} />
                <p>{t}</p>
              </div>
            ))}
          </div>
          <div className="p-2 div-box">
            <div>
              <h1 className="text-orange">Comentarios</h1>
              <p>
                Todas las opiniones han sido escritas por clientes reales que
                han reservado con nosotros.
              </p>
            </div>
            {comentarios.length !== 0 ? (
              comentarios.map((c) => (
                <div key={c.idReseña} className="d-flex flex-column px-5 pt-1">
                  <div>Valoración: {c.valoracionRealizada} / 5 estrellas</div>
                  <div className="d-flex">
                    <b>{c.nombreUsuario}</b>
                    <p className="mx-1 mb-0">-</p>
                    <p className="mb-0">07/12/2019</p>
                  </div>
                  <div>
                    <p>{c.reseñaRealizada}</p>
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
          <div className="p-2 div-box">
            <h1 className="text-orange">Escribe tu reseña</h1>
            <Formik
              initialValues={{
                reseña: "",
                nombre: "",
                valoracion: "",
              }}
              validate={(valuesInput) => {
                let errors = {};

                if (valuesInput.reseña.trim() === "") {
                  errors.reseña = "Campo 'Reseña' vacio.";
                } else if (valuesInput.reseña.trim().split("").length < 5) {
                  errors.reseña =
                    "El lugar debe tener entre minimamente 5 caracteres";
                }

                if (valuesInput.nombre.trim() === "") {
                  errors.nombre = "Campo 'Nombre' vacio.";
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valuesInput.nombre)) {
                  errors.nombre = "Nombre invalido.";
                } else if (
                  valuesInput.nombre.trim().split("").length < 5 ||
                  valuesInput.nombre.trim().split("").length > 30
                ) {
                  errors.nombre =
                    "El Nombre debe tener entre 5 y 30 caracteres.";
                }

                if (valuesInput.valoracion === "") {
                  errors.valoracion = "Debe realizar una valoración.";
                }

                return errors;
              }}
              onSubmit={(valuesInput, { resetForm }) => {
                setComentarios([
                  ...comentarios,
                  {
                    idReseña: comentarios.length,
                    reseñaRealizada: valuesInput.reseña,
                    nombreUsuario: valuesInput.nombre,
                    valoracionRealizada: valuesInput.valoracion,
                  },
                ]);
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
                      name="reseña"
                      placeholder="Ingresa tu reseña"
                      value={values.reseña}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.reseña && touched.reseña && (
                      <Form.Text className="text-muted">
                        {errors.reseña}
                      </Form.Text>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="nombre"
                      placeholder="Ingresar nombre"
                      value={values.nombre}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.nombre && touched.nombre && (
                      <Form.Text className="text-muted">
                        {errors.nombre}
                      </Form.Text>
                    )}
                  </Form.Group>
                  <Form.Select
                    className="mx-auto"
                    aria-label="Default select example"
                    name="valoracion"
                    value={values.valoracion}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Seleccione Valoración</option>
                    <option value="1">1 Estrella</option>
                    <option value="2">2 Estrella</option>
                    <option value="3">3 Estrella</option>
                    <option value="4">4 Estrella</option>
                    <option value="5">5 Estrella</option>
                  </Form.Select>
                  {errors.valoracion && touched.valoracion && (
                    <Form.Text className="text-muted">
                      {errors.valoracion}
                    </Form.Text>
                  )}
                  <div className="mt-3 d-flex justify-content-end mx-2">
                    <button className="btn-add-review" type="submit">
                      Añadir
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlePage;
