import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const FeatureElement = (props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {
        <div className="col-12 mt-2 mt-sm-0 col-sm-6 col-md-4 col-lg-3 col-xxl-2 div-card p-0">
          <Card className="card m-2">
            <div className="d-flex div-img-card">
              <Link to={`/lugar/${props.objeto.id}`} className="w-100">
                <Card.Img
                  className="img-fluid"
                  variant="top"
                  src={props.objeto.img}
                />
              </Link>
            </div>

            <Card.Body className="card-body">
              <p>{props.objeto.lugar}</p>
              <div className="div-details">
                <p>{props.objeto.categoria.toUpperCase()}</p>
                <p>{props.objeto.provincia.toUpperCase()}</p>
              </div>
            </Card.Body>
            <Link className="card-cta mb-3" to={`/lugar/${props.objeto.id}`}>
              Ver mas
            </Link>
          </Card>
        </div>
      }
    </>
  );
};

export default FeatureElement;
