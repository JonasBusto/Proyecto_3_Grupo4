import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const PlaceDb = (props) => {
  return (
    <>
      <div className="col-12 mt-2 mt-sm-0 col-sm-6 col-md-4 col-lg-3 col-xxl-2 div-card p-0">
        <Card className="card m-2">
          <div className="d-flex div-img-card">
            <Link to={`/lugar/${props.objeto._id}`} className="w-100">
              <Card.Img
                className="img-fluid"
                variant="top"
                src={props.objeto.img.img1}
              />
            </Link>
          </div>

          <Card.Body className="card-body">
            <p>{props.objeto.namePlace}</p>
            <div className="div-details">
              <p>{props.objeto.category.toUpperCase()}</p>
              <p>{props.objeto.province.toUpperCase()}</p>
            </div>
          </Card.Body>
          <Link className="card-cta mb-3" to={`/lugarDb/${props.objeto._id}`}>
            Ver mas
          </Link>
        </Card>
      </div>
    </>
  );
};

export default PlaceDb;
