import React from "react";
import { useParams } from "react-router";
import FeatureElement from "./FeatureElement";

const SearchResult = ({ placesDb }) => {
  let resultSearch = useParams().resultado;
  return (
    <>
      <div className="d-flex m-2 mx-3">
        <p>Buscaste: "{resultSearch}"</p>
      </div>
      <div className="d-flex flex-column">
        <div className="row m-0">
          {placesDb.length !== 0 ? (
            placesDb.map(
              (p, i) =>
                p.namePlace
                  .toLowerCase()
                  .includes(resultSearch.toLowerCase().trim()) && (
                  <FeatureElement key={p._id} object={p} />
                )
            )
          ) : (
            <h1 className="text-center">No se encontraron resultados</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchResult;
