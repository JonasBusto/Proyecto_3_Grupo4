import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import LikeElement from "./LikeElement";
import content from "../arrayContent";
import { useParams } from "react-router";
import FeatureElement from "./FeatureElement";

const SearchResult = () => {
  let resultSearch = useParams().resultado;
  const [arrayPlaces, setArrayPlaces] = useState(
    JSON.parse(localStorage.getItem("Lugares")) || []
  );
  let arrayAux = arrayPlaces.filter((p) =>
    p.lugar.toLowerCase().includes(resultSearch.toLowerCase().trim())
  );
  const [province, setProvince] = useState("");
  const [category, setCategory] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log("busqueda: ", resultSearch);

  return (
    <>
      <div className="d-flex m-2 mx-3">
        <p>Buscaste: "{resultSearch}"</p>
      </div>
      <div className="d-flex flex-column">
        <div className="row m-0">
          {arrayAux.map((p, i) => (
            <FeatureElement key={p.id} objeto={p} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchResult;
