import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import LikeElement from "./LikeElement";
import { Link } from "react-router-dom";
import "../Styles/likesPage.css";

const LikesPage = () => {
  const [province, setProvince] = useState("");
  const [category, setCategory] = useState("");

  return (
    <>
      <h1 className="text-center mt-2">MIS ME GUSTA</h1>
      <p className="mx-4 p-anchor-head-links">
        <Link to="/">Home</Link>
        <b className="mx-2">/</b>
        <Link to="/likes">Me gusta</Link>
      </p>
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
              onInput={(e) => setCategory(e.target.value)}
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
        </div>
      </div>
      <div className="d-flex flex-column align-items-center mb-3 mt-4 img-like-error">
        <h3>ESTA FUNCIONALIDAD LLEGARA PROXIMAMENTE</h3>
        <img
          src="https://media.tenor.com/ilPf7Nnj5CAAAAAC/computer-drinking.gif"
          alt=""
        />
        <p
          className="mt-1 p-1"
          style={{ backgroundColor: "#ff7b00", color: "white" }}
        >
          El pajaro de homero esta trabajando en ello
        </p>
      </div>
    </>
  );
};

export default LikesPage;
