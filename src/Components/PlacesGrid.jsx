import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Pagination from "react-bootstrap/Pagination";
import ProvincePlace from "./ProvincePlace";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import Modal from "react-bootstrap/Modal";
import {
  faBookAtlas,
  faImage,
  faLocationDot,
  faMapPin,
  faMountainCity,
  faR,
  faThumbsUp,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/placesGrid.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router";

const PlacesGrid = () => {
  const provinceDate = useParams().province;
  const categoryDate = useParams().category;
  const [province, setProvince] = useState(provinceDate);
  const [category, setCategory] = useState(categoryDate);
  const [formEnviado, setFormEnviado] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [arrayPlaces, setArrayPlaces] = useState(
    JSON.parse(localStorage.getItem("Lugares"))
  );

  const addPlace = (objectPlace) => {
    setArrayPlaces([
      ...arrayPlaces,
      {
        id: arrayPlaces.length,
        lugar: objectPlace.lugar,
        provincia: objectPlace.provincia,
        categoria: objectPlace.categoria,
        descripcion: objectPlace.descripcion,
        img: {
          img1: objectPlace.url,
          img2: "",
          img3: "",
          img4: "",
          img5: "",
        },
        servicios: ["", "", "", "", ""],
        tips: ["", "", "", "", ""],
        liked: false,
        destacado: false,
        user: "",
        userProfile: "",
      },
    ]);
  };

  const deletePlace = (objectPlace) => {
    setArrayPlaces(arrayPlaces.filter((p) => p.id !== objectPlace.id));
  };

  const giveLike = (objectPlace) => {
    let arrayAux = [...arrayPlaces];
    let indexFound = arrayAux.findIndex((l) => l.id === objectPlace.id);
    if (arrayAux[indexFound].liked) {
      arrayAux[indexFound].liked = false;
    } else {
      arrayAux[indexFound].liked = true;
    }
    setArrayPlaces(arrayAux);
  };

  const [itemOffset, setItemOffset] = useState(0);
  let itemsPerPage = 12;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = arrayPlaces.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(arrayPlaces.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % arrayPlaces.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    localStorage.setItem("Lugares", JSON.stringify(arrayPlaces));
  }, [arrayPlaces]);

  return (
    <>
      <h1 className="text-center">LUGARES DE PROVINCIA</h1>
      <div className="d-flex flex-column">
        <div className="row m-0">
          <div className="col-12 col-sm-6 col-lg-4 d-flex align-items-center mt-1">
            <h5 className="m-0">Provincia:</h5>
            <Form.Select
              aria-label="Default select example"
              value={province}
              onInput={(e) => setProvince(e.target.value)}
            >
              <option value="todas">Todas</option>
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
          <div className="col-12 col-sm-6 col-lg-4 d-flex align-items-center mt-1">
            <h5 className="m-0">Categoria:</h5>
            <Form.Select
              aria-label="Default select example"
              value={category}
              onInput={(e) => setCategory(e.target.value)}
            >
              <option value="todas">Todas</option>
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
        </div>
        <div className="btn-add-place d-flex justify-content-center">
          <button onClick={handleShow}>Añadir Lugar</button>
        </div>
        <div>
          <Modal show={show} onHide={handleClose} backdrop="static">
            <Modal.Header className="modal-header-place justify-content-center">
              <Modal.Title>Añadir Lugar</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body-place">
              <div className="d-flex justify-content-center">
                <p>
                  <b className="title-white">Bienvenido a</b>{" "}
                  <b className="title-black">Rolling</b>
                  <b className="title-orange">Travel</b>
                </p>
              </div>
              <Formik
                initialValues={{
                  lugar: "",
                  url: "",
                  provincia: "",
                  categoria: "",
                  descripcion: "",
                }}
                validate={(valuesInput) => {
                  let errors = {};

                  if (valuesInput.lugar.trim() === "") {
                    errors.lugar = "Campo 'Lugar' vacio.";
                  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valuesInput.lugar)) {
                    errors.lugar = "Lugar invalido.";
                  } else if (
                    valuesInput.lugar.trim().split("").length < 5 ||
                    valuesInput.lugar.trim().split("").length > 30
                  ) {
                    errors.lugar =
                      "El lugar debe tener entre 5 y 30 caracteres.";
                  }

                  if (valuesInput.descripcion.trim() === "") {
                    errors.descripcion = "Campo 'Descripción' vacio.";
                  } else if (
                    valuesInput.descripcion.trim().split("").length < 1 ||
                    valuesInput.descripcion.trim().split("").length > 300
                  ) {
                    errors.descripcion =
                      "La descripción debe tener entre 1 y 300 caracteres.";
                  }

                  if (valuesInput.url.trim() === "") {
                    errors.url = "Campo 'URL' vacio.";
                  }

                  if (valuesInput.provincia === "") {
                    errors.provincia = "Elija una provincia.";
                  }

                  if (valuesInput.categoria === "") {
                    errors.categoria = "Elija una categoria.";
                  }

                  return errors;
                }}
                onSubmit={(valuesInput, { resetForm }) => {
                  addPlace(valuesInput);
                  resetForm({});
                  setFormEnviado(true);
                  setTimeout(() => {
                    setFormEnviado(false);
                  }, 2000);
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
                    <Form.Group className="mb-3">
                      <div className="div-input-form">
                        <div className="div-input-form-icon d-flex justify-content-center align-items-center">
                          <FontAwesomeIcon icon={faLocationDot} />
                        </div>
                        <Form.Control
                          type="text"
                          name="lugar"
                          placeholder="Ingresar lugar"
                          value={values.lugar}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      {errors.lugar && touched.lugar && (
                        <Form.Text className="text-muted">
                          {errors.lugar}
                        </Form.Text>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-3">
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
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <div className="div-input-form">
                        <div className="div-input-form-icon d-flex justify-content-center align-items-center">
                          <FontAwesomeIcon icon={faImage} />
                        </div>
                        <Form.Control
                          type="text"
                          name="url"
                          placeholder="Ingresar URL imagen"
                          value={values.url}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      {errors.url && touched.url && (
                        <Form.Text className="text-muted">
                          {errors.url}
                        </Form.Text>
                      )}
                    </Form.Group>
                    <div>
                      <div className="div-input-form">
                        <div className="div-input-form-icon d-flex justify-content-center align-items-center">
                          <FontAwesomeIcon icon={faMapPin} />
                        </div>
                        <Form.Select
                          className="mx-auto"
                          aria-label="Default select example"
                          name="provincia"
                          value={values.provincia}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="">Seleccione Provincia</option>
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

                    <div className="mt-3">
                      <div className="div-input-form">
                        <div className="div-input-form-icon d-flex justify-content-center align-items-center">
                          <FontAwesomeIcon icon={faMountainCity} />
                        </div>
                        <Form.Select
                          className="mx-auto"
                          aria-label="Default select example"
                          name="categoria"
                          value={values.categoria}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="">Seleccione Categoria</option>
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
                    <div className="d-flex justify-content-between mx-5 mt-3 div-btn-modal-place">
                      <button
                        onClick={(e) => {
                          handleClose();
                          e.preventDefault();
                        }}
                      >
                        Cerrar
                      </button>
                      <button type="submit">Añadir</button>
                    </div>
                  </Form>
                )}
              </Formik>
            </Modal.Body>
          </Modal>
        </div>
        <div className="row m-0">
          {currentItems && category === "todas" && province === "todas"
            ? currentItems.map((p, i) => (
                <ProvincePlace
                  key={p.id}
                  objeto={p}
                  catSelect={category}
                  provSelect={province}
                  deleteP={() => deletePlace(p)}
                  likeP={() => giveLike(p)}
                />
              ))
            : arrayPlaces.map((p, i) => (
                <ProvincePlace
                  key={p.id}
                  objeto={p}
                  catSelect={category}
                  provSelect={province}
                  deleteP={() => deletePlace(p)}
                  likeP={() => giveLike(p)}
                />
              ))}
        </div>
        {category === "" && province === "" && (
          <ReactPaginate
            className="pagination-custom"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            marginPagesDisplayed={0}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            initialPage={0}
          />
        )}
      </div>
    </>
  );
};

export default PlacesGrid;
