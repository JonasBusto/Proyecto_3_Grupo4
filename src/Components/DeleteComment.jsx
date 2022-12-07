import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const DeleteComment = ({ object, deteleComment }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="btn-delete-comments" onClick={handleShow}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header className="modal-header-place justify-content-center">
          <Modal.Title>Eliminar Lugar</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-place">
          ¿Esta seguro de eliminar el comentario realizado por '{object.user}'?
          <div className="d-flex justify-content-between mx-5 mt-3 div-btn-modal-place">
            <button
              onClick={() => {
                handleClose();
              }}
            >
              Cancelar
            </button>
            <button
              onClick={() => {
                deteleComment(object._id);
                handleClose();
              }}
            >
              Aceptar
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DeleteComment;
