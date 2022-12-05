import React, { useState } from "react";
import Form from "react-bootstrap/Form";
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
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/placesGrid.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router";
import Swal from "sweetalert2";

const PlacesGrid = ({ placesDb, userLDb }) => {
  const provinceDate = useParams().province;
  const categoryDate = useParams().category;
  const [province, setProvince] = useState(provinceDate);
  const [category, setCategory] = useState(categoryDate);
  const [formEnviado, setFormEnviado] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const validateAddPlace = (values, resetForm) => {
    let indexFound = placesDb.findIndex(
      (e) =>
        e.namePlace.toLowerCase().trim() ===
        values.namePlace.toLowerCase().trim()
    );
    if (indexFound === -1) {
      handleSubmitAddPlace(values);
      resetForm();
      Swal.fire({
        title: "Lugar cargado exitosamente ✔👌",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El lugar ya existe! 🤷‍♀️",
      });
    }
  };

  const handleSubmitAddPlace = (values) => {
    fetch("https://proyecto-3-backend.vercel.app/addPlace", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        namePlace: values.namePlace,
        province: values.province,
        category: values.category,
        description: values.description,
        img: {
          img1: values.url1,
          img2: values.url2,
          img3: values.url3,
          img4: values.url4,
          img5: values.url5,
        },
      }),
    }).then((res) => res.json());
    window.location.reload();
  };

  const handleSubmitDeletePlace = (object) => {
    let indexFound = placesDb.findIndex(
      (e) => e._id.toLowerCase().trim() === object._id.toLowerCase().trim()
    );

    if (indexFound === -1) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El lugar que intenta eliminar no existe ❌",
      });
    } else {
      fetch(`https://proyecto-3-backend.vercel.app/deletePlace/${object._id}`, {
        method: "DELETE",
      }).then((res) => res.json());
      window.location.reload();
    }
  };

  const [arrayPlaces, setArrayPlaces] = useState(
    JSON.parse(localStorage.getItem("Lugares"))
  );

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
  const currentItems = placesDb.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(placesDb.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % placesDb.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <h1 className="text-center">LUGARES DE PROVINCIA</h1>
      <p className="mx-2 p-anchor-head-links">
        <Link to="/">Home</Link>
        <b className="mx-2">/</b>
        <Link to="/lugares/todas/todas">Lugares</Link>
      </p>
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
              <option value="llamativo">Llamativo</option>
              <option value="senderismo">Senderismo</option>
              <option value="historia">Historia</option>
              <option value="rural">Rural</option>
            </Form.Select>
          </div>
        </div>
        {Object.keys(userLDb).length !== 0 && userLDb.rol === "admin" && (
          <div className="btn-add-place d-flex justify-content-center">
            <button onClick={handleShow}>Añadir Lugar</button>
          </div>
        )}
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
                  namePlace: "",
                  url1: "",
                  url2: "",
                  url3: "",
                  url4: "",
                  url5: "",
                  province: "",
                  category: "",
                  description: "",
                }}
                validate={(valuesInput) => {
                  let errors = {};

                  if (valuesInput.namePlace.trim() === "") {
                    errors.namePlace = "Campo 'Lugar' vacio.";
                  } else if (
                    !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valuesInput.namePlace)
                  ) {
                    errors.namePlace = "Lugar invalido.";
                  } else if (
                    valuesInput.namePlace.trim().split("").length < 5 ||
                    valuesInput.namePlace.trim().split("").length > 30
                  ) {
                    errors.namePlace =
                      "El lugar debe tener entre 5 y 30 caracteres.";
                  }

                  if (valuesInput.description.trim() === "") {
                    errors.description = "Campo 'Descripción' vacio.";
                  } else if (
                    valuesInput.description.trim().split("").length < 1 ||
                    valuesInput.description.trim().split("").length > 300
                  ) {
                    errors.description =
                      "La descripción debe tener entre 1 y 300 caracteres.";
                  }

                  if (valuesInput.url1.trim() === "") {
                    errors.url1 = "Campo 'URL 1' vacio.";
                  }
                  if (valuesInput.url2.trim() === "") {
                    errors.url2 = "Campo 'URL 2' vacio.";
                  }
                  if (valuesInput.url3.trim() === "") {
                    errors.url3 = "Campo 'URL 3' vacio.";
                  }
                  if (valuesInput.url4.trim() === "") {
                    errors.url4 = "Campo 'URL 4' vacio.";
                  }
                  if (valuesInput.url5.trim() === "") {
                    errors.url5 = "Campo 'URL 5' vacio.";
                  }

                  if (valuesInput.province === "") {
                    errors.province = "Elija una provincia.";
                  }

                  if (valuesInput.category === "") {
                    errors.category = "Elija una categoria.";
                  }

                  return errors;
                }}
                onSubmit={(valuesInput, { resetForm }) => {
                  validateAddPlace(valuesInput, resetForm);
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
                          name="namePlace"
                          placeholder="Ingresar lugar"
                          value={values.namePlace}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      {errors.namePlace && touched.namePlace && (
                        <Form.Text className="text-muted">
                          {errors.namePlace}
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
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <div className="div-input-form">
                        <div className="div-input-form-icon d-flex justify-content-center align-items-center">
                          <FontAwesomeIcon icon={faImage} />
                        </div>
                        <Form.Control
                          type="text"
                          name="url1"
                          placeholder="Ingresar URL 1 imagen"
                          value={values.url1}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      {errors.url1 && touched.url1 && (
                        <Form.Text className="text-muted">
                          {errors.url1}
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
                          name="url2"
                          placeholder="Ingresar URL 2 imagen"
                          value={values.url2}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      {errors.url2 && touched.url2 && (
                        <Form.Text className="text-muted">
                          {errors.url2}
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
                          name="url3"
                          placeholder="Ingresar URL 3 imagen"
                          value={values.url3}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      {errors.url3 && touched.url3 && (
                        <Form.Text className="text-muted">
                          {errors.url3}
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
                          name="url4"
                          placeholder="Ingresar URL 4 imagen"
                          value={values.url4}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      {errors.url4 && touched.url4 && (
                        <Form.Text className="text-muted">
                          {errors.url4}
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
                          name="url5"
                          placeholder="Ingresar URL 5 imagen"
                          value={values.url5}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      {errors.url5 && touched.url5 && (
                        <Form.Text className="text-muted">
                          {errors.url5}
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
                          name="province"
                          value={values.province}
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
                      {errors.province && touched.province && (
                        <Form.Text className="text-muted">
                          {errors.province}
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
                          name="category"
                          value={values.category}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="">Seleccione Categoria</option>
                          <option value="playa">Playa</option>
                          <option value="montaña">Montaña</option>
                          <option value="selva">Selva</option>
                          <option value="cataratas">Cataratas</option>
                          <option value="llamativo">Llamativo</option>
                          <option value="senderismo">Senderismo</option>
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
        <div className="row m-0 row-places-grid-width mb-5">
          {currentItems && category === "todas" && province === "todas"
            ? placesDb.map((p, i) => (
                <ProvincePlace
                  key={p._id}
                  object={p}
                  catSelect={category}
                  provSelect={province}
                  userLDb={userLDb}
                  deleteP={() => handleSubmitDeletePlace(p)}
                  likeP={() => giveLike(p)}
                />
              ))
            : placesDb.map((p, i) => (
                <ProvincePlace
                  key={p._id}
                  object={p}
                  catSelect={category}
                  provSelect={province}
                  userLDb={userLDb}
                  deleteP={() => handleSubmitDeletePlace(p)}
                  likeP={() => giveLike(p)}
                />
              ))}
        </div>
        {category === "todas" && province === "todas" && (
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
