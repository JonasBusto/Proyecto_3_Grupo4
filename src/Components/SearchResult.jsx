import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import LikeElement from "./LikeElement";
import content from "../arrayContent";

const SearchResult = () => {
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

  return (
    <>
      <div className="d-flex m-2 mx-3">
        <p>Buscaste: resultados</p>
      </div>
      <div className="d-flex flex-column">
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

export default SearchResult;
