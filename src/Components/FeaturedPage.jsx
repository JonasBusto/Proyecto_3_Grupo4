import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import FeatureElement from "./FeatureElement";
import TablePlaces from "../Components/TablePlaces";
import content from "../arrayContent";
import "../Styles/featuredPage.css";

const FeaturedPage = () => {
  const [province, setProvince] = useState("");
  const [category, setCategory] = useState("");
  const [arrayPlaces, setArrayPlaces] = useState(content);
  const [alert, setAlert] = useState(false);

  const defineFeatured = (objectPlace) => {
    let arrayAux = [...arrayPlaces];
    let indexFound = arrayAux.findIndex((l) => l.id === objectPlace.id);
    let counterFeatured = 0;
    for (let i = 0; i < arrayPlaces.length; i++) {
      if (arrayPlaces[i].destacado === true) {
        counterFeatured++;
      }
    }

    if (arrayAux[indexFound].destacado) {
      if (counterFeatured <= 1) {
        setAlert(true);
      } else {
        arrayAux[indexFound].destacado = false;
      }
    } else {
      arrayAux[indexFound].destacado = true;
    }
    setArrayPlaces(arrayAux);
  };

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, [alert]);
  return (
    <>
      <div>
        <h1 className="text-center">Lugares destacados</h1>
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
                  {arrayPlaces.map((l) => (
                    <TablePlaces
                      key={l.id}
                      object={l}
                      catSelect={category}
                      provSelect={province}
                      highlight={() => defineFeatured(l)}
                    />
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>

        <div className="row m-0">
          {arrayPlaces.length !== 0 &&
            arrayPlaces.map(
              (p, i) =>
                p.destacado === true && <FeatureElement key={p.id} objeto={p} />
            )}
        </div>
      </div>
    </>
  );
};

export default FeaturedPage;
