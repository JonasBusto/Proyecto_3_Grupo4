import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Pagination from "react-bootstrap/Pagination";
import ProvincePlace from "./ProvincePlace";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import Modal from "react-bootstrap/Modal";
import {
  faImage,
  faLocationDot,
  faR,
  faThumbsUp,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/placesGrid.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PlacesGrid = () => {
  const [province, setProvince] = useState("");
  const [category, setCategory] = useState("");
  const [formEnviado, setFormEnviado] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const content = [
    {
      id: 0,
      lugar: "lugar 1",
      provincia: "Tucumán",
      categoria: "montaña",
      img: "https://www.welcomeargentina.com/rio-negro/imagenes/rio-negro.jpg",
      liked: false,
    },
    {
      id: 1,
      lugar: "lugar 2",
      provincia: "Tucumán",
      categoria: "selva",
      img: "https://www.viajes.com/wp-content/uploads/destinos-tc2/misiones-argentina.jpg",
      liked: false,
    },
    {
      id: 2,
      lugar: "lugar 3",
      provincia: "Bs As",
      categoria: "montaña",
      img: "https://vivo247.com/wp-content/uploads/2020/10/salta-sello-viaje.jpg",
      liked: false,
    },
    {
      id: 3,
      lugar: "lugar 4",
      provincia: "Bs as",
      categoria: "Playa",
      img: "https://www.clarin.com/img/2019/01/10/jgGG_BkgV_720x0__1.jpg",
      liked: false,
    },
    {
      id: 4,
      lugar: "lugar 5",
      provincia: "Catamarca",
      categoria: "montaña",
      img: "https://volemos.nyc3.cdn.digitaloceanspaces.com/blog/wp-content/uploads/2020/01/ruta-de-los-6miles.jpg",
      liked: false,
    },
    {
      id: 5,
      lugar: "lugar 6",
      provincia: "Tucumán",
      categoria: "Montaña",
      img: "https://periodicoparatodos.com.ar/wp-content/uploads/2022/01/1-800x445.jpg",
      liked: false,
    },
    {
      id: 6,
      lugar: "lugar 7",
      provincia: "Misiones",
      categoria: "Cataratas",
      img: "https://www.expreso.info/files/2019-12/Iguazu_Catarata.jpg",
      liked: false,
    },
    {
      id: 7,
      lugar: "lugar 8",
      provincia: "Jujuy",
      categoria: "Llanura",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/92/b9/5f/salinas-grandes-es-la.jpg?w=500&h=300&s=1",
      liked: false,
    },
  ];

  const [arrayPlaces, setArrayPlaces] = useState(content);

  const addPlace = (objectPlace) => {
    setArrayPlaces([
      ...arrayPlaces,
      {
        id: arrayPlaces.length,
        lugar: objectPlace.lugar,
        provincia: objectPlace.provincia,
        categoria: objectPlace.categoria,
        img: objectPlace.url,
        liked: false,
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

  return (
    <>
      <h1 className="text-center">LUGARES DE PROVINCIA</h1>
      <div className="d-flex flex-column">
        <div className="row m-0">
          <div className="col-12 col-sm-6 col-lg-4 d-flex align-items-center mt-1">
            <h5 className="m-0">Provincia:</h5>
            <Form.Select
              aria-label="Default select example"
              onInput={(e) => setProvince(e.target.value)}
            >
              <option value="">Todas</option>
              <option value="Tucumán">Tucumán</option>
              <option value="Bs As">Bs As</option>
              <option value="provincia_3">Provincia 3</option>
            </Form.Select>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 d-flex align-items-center mt-1">
            <h5 className="m-0">Categoria:</h5>
            <Form.Select
              aria-label="Default select example"
              onInput={(e) => setCategory(e.target.value)}
            >
              <option value="">Todas</option>
              <option value="playa">Playa</option>
              <option value="montaña">Montaña</option>
              <option value="selva">Selva</option>
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
                    </Form.Select>
                    {errors.provincia && touched.provincia && (
                      <Form.Text className="text-muted">
                        {errors.provincia}
                      </Form.Text>
                    )}
                    <Form.Select
                      className="mt-3 mx-auto"
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
                    </Form.Select>
                    {errors.categoria && touched.categoria && (
                      <Form.Text className="text-muted">
                        {errors.categoria}
                      </Form.Text>
                    )}
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
          {arrayPlaces.map((p, i) => (
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
        {/* <div className="div-pagination mt-5">
          <Pagination className="justify-content-center">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div> */}
      </div>
    </>
  );
};

export default PlacesGrid;
