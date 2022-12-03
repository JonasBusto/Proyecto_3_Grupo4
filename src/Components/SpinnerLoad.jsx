import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "../Styles/spinnerLoad.css";

const SpinnerLoad = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center my-5">
        <Spinner animation="border" className="sp" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </>
  );
};

export default SpinnerLoad;
