import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import FeatureElement from "./FeatureElement";
import TablePlaces from "../Components/TablePlaces";
import { Link } from "react-router-dom";
import "../Styles/featuredPage.css";

const FeaturedPage = ({ placesDb }) => {
  const [province, setProvince] = useState("");
  const [category, setCategory] = useState("");
  const [alert, setAlert] = useState(false);

  const fetchFeatured = (id, verifyFeatured) => {
    fetch(`https://proyecto-3-backend.vercel.app/featuredPlace/${id}`, {
      method: "PUT",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        featured: verifyFeatured,
      }),
    })
      .then((res) => res.json())
      .catch((error) => console.log("error: ", error));

    window.location.reload();
  };

  const defineFeatured = (objectPlace) => {
    let verifyFeatured;

    let counterFeatured = 0;
    for (let i = 0; i < placesDb.length; i++) {
      if (placesDb[i].featured === true) {
        counterFeatured++;
      }
    }

    if (objectPlace.featured === false) {
      verifyFeatured = true;
      fetchFeatured(objectPlace._id, verifyFeatured);
    } else {
      if (counterFeatured <= 1) {
        setAlert(true);
      } else {
        verifyFeatured = false;
        fetchFeatured(objectPlace._id, verifyFeatured);
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, [alert]);
  return (
    <>
      <div>
        <h1 className="text-center mt-2">DESTACADOS</h1>
        <p className="mx-4 p-anchor-head-links">
          <Link to="/">Home</Link>
          <b className="mx-2">/</b>
          <Link to="/destacados">Destacados</Link>
        </p>
        <div className="div-admin-featured">
          <h2 className="text-center title-admin-featured">
            Administrar destacados
          </h2>
          <div>
            <div>
              <div className="row m-0">
                <div className="col-12 col-sm-6 col-lg-4 d-flex align-items-center div-select-featured">
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
                <div className="col-12 col-sm-6 col-lg-4 d-flex align-items-center div-select-featured">
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
            <div className="div-table-featured">
              {alert && (
                <h4 className="text-center text-orange">
                  Debe existir minimamente un destacado
                </h4>
              )}
              <Table responsive="sm" striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th style={{ width: "25rem" }}>Lugar</th>
                    <th>Provincia</th>
                    <th>Categoria</th>
                    <th>Destacado</th>
                  </tr>
                </thead>
                <tbody>
                  {placesDb.length !== 0 &&
                    placesDb.map((p) => (
                      <TablePlaces
                        key={p._id}
                        object={p}
                        catSelect={category}
                        provSelect={province}
                        highlight={() => defineFeatured(p)}
                      />
                    ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>

        <div className="row m-0">
          {placesDb.length !== 0 &&
            placesDb.map(
              (p) =>
                p.featured === true && <FeatureElement key={p._id} object={p} />
            )}
        </div>
      </div>
    </>
  );
};

export default FeaturedPage;
