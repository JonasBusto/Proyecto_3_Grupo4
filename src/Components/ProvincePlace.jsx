import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faLocationDot,
  faR,
  faThumbsUp,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
function ProvincePlace(props) {
  let encontrado1 = false;
  let encontrado2 = false;
  let mostrarLugar = false;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (
    props.catSelect.toLowerCase() === props.objeto.categoria.toLowerCase() ||
    props.catSelect === ""
  ) {
    encontrado1 = true;
  } else {
    encontrado1 = false;
  }

  if (
    props.provSelect.toLowerCase() === props.objeto.provincia.toLowerCase() ||
    props.provSelect === ""
  ) {
    encontrado2 = true;
  } else {
    encontrado2 = false;
  }

  if (encontrado1 && encontrado2) {
    mostrarLugar = true;
  } else {
    mostrarLugar = false;
  }

  return (
    <>
      {mostrarLugar ? (
        <div className="col-12 mt-2 mt-sm-0 col-sm-6 col-md-4 col-lg-3 div-card p-0">
          <Card className="card m-2">
            <div className="d-flex div-img-card">
              <Link to="/lugar" className="w-100">
                <Card.Img
                  className="img-fluid"
                  variant="top"
                  src={props.objeto.img}
                />
              </Link>
              <button
                className="btn-delete d-flex align-items-center justify-content-center"
                onClick={handleShow}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header className="modal-header-place justify-content-center">
                  <Modal.Title>Eliminar Lugar</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body-place">
                  ¿Esta seguro de eliminar el lugar 'Lugar 1'?
                  <div className="d-flex justify-content-between mx-5 mt-3 div-btn-modal-place">
                    <button onClick={handleClose}>Cancelar</button>
                    <button onClick={props.deleteP}>Aceptar</button>
                  </div>
                </Modal.Body>
              </Modal>
              {props.objeto.liked ? (
                <button
                  className="btn-like liked d-flex align-items-center justify-content-center"
                  onClick={props.likeP}
                >
                  <FontAwesomeIcon icon={faThumbsUp} />
                </button>
              ) : (
                <button
                  className="btn-like d-flex align-items-center justify-content-center"
                  onClick={props.likeP}
                >
                  <FontAwesomeIcon icon={faThumbsUp} />
                </button>
              )}
            </div>

            <Card.Body className="card-body">
              <p>{props.objeto.lugar}</p>
              <div className="div-details">
                <p>{props.objeto.categoria.toUpperCase()}</p>
                <p>{props.objeto.provincia.toUpperCase()}</p>
              </div>
            </Card.Body>
            <Link className="card-cta mb-3" to="\lugar">
              Ver mas
            </Link>
          </Card>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ProvincePlace;
