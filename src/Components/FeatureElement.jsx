import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const FeatureElement = (props) => {
  return (
    <>
      {
        <div className="col-12 mt-2 mt-sm-0 col-sm-6 col-md-4 col-lg-3 col-xxl-2 div-card p-0">
          <Card className="card m-2">
            <div className="d-flex div-img-card">
              <Link to={`/lugar/${props.object._id}`} className="w-100">
                <Card.Img
                  className="img-fluid"
                  variant="top"
                  src={props.object.img.img1}
                />
              </Link>
            </div>

            <Card.Body className="card-body">
              <p>{props.object.namePlace}</p>
              <div className="div-details">
                <p>{props.object.category.toUpperCase()}</p>
                <p>{props.object.province.toUpperCase()}</p>
              </div>
            </Card.Body>
            <Link className="card-cta mb-3" to={`/lugar/${props.object._id}`}>
              Ver mas
            </Link>
          </Card>
        </div>
      }
    </>
  );
};

export default FeatureElement;
