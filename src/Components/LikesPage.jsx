import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import LikeElement from "./LikeElement";
import content from "../arrayContent";
import { Link } from "react-router-dom";
import "../Styles/likesPage.css";

const LikesPage = () => {
  const [province, setProvince] = useState("");
  const [category, setCategory] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [arrayPlaces, setArrayPlaces] = useState(content);

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

  const [dbPlaces, setDbPlaces] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/consultPlace`)
      .then((res) => res.json())
      .then((json) => setDbPlaces(json));
  }, []);


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

        <div className="row m-0">
          {arrayPlaces && category === "" && province === ""
            ? arrayPlaces.map((p, i) => (
                <LikeElement
                  key={p.id}
                  objeto={p}
                  catSelect={category}
                  provSelect={province}
                  deleteP={() => deletePlace(p)}
                  likeP={() => giveLike(p)}
                />
              ))
            : arrayPlaces.map((p, i) => (
                <LikeElement
                  key={p.id}
                  objeto={p}
                  catSelect={category}
                  provSelect={province}
                  deleteP={() => deletePlace(p)}
                  likeP={() => giveLike(p)}
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default LikesPage;
