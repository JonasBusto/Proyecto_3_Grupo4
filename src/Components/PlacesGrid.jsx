import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Pagination from "react-bootstrap/Pagination";
import { Link } from "react-router-dom";
import { faR, faThumbsUp, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../Styles/placesGrid.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Lugar(props) {
  let encontrado1 = false;
  let encontrado2 = false;
  let mostrarLugar = false;

  if (
    props.catSelect.toLowerCase() === props.objeto.categoria.toLowerCase() ||
    props.catSelect === ""
  ) {
    encontrado1 = true;
  } else {
    encontrado1 = false;
  }

  if (
    props.provSelect.toLowerCase() === props.objeto.provincia.toLowerCase() ||
    props.provSelect === ""
  ) {
    encontrado2 = true;
  } else {
    encontrado2 = false;
  }

  if (encontrado1 && encontrado2) {
    mostrarLugar = true;
  } else {
    mostrarLugar = false;
  }

  return (
    <>
      {mostrarLugar ? (
        <div className="col-12 mt-2 mt-sm-0 col-sm-6 col-md-4 col-lg-3 div-card p-0">
          <Card className="card m-2">
            <div className="d-flex div-img-card">
              <Link to="/lugar" className="w-100">
                <Card.Img
                  className="img-fluid"
                  variant="top"
                  src={props.objeto.img}
                />
              </Link>
              <button className="btn-delete d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <button className="btn-like d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faThumbsUp} />
              </button>
            </div>

            <Card.Body className="card-body">
              <p>{props.objeto.lugar}</p>
              <div className="div-details">
                <p>{props.objeto.categoria.toUpperCase()}</p>
                <p>{props.objeto.provincia.toUpperCase()}</p>
              </div>
            </Card.Body>
            <Link className="card-cta mb-3" to="\lugar">
              Ver mas
            </Link>
          </Card>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

const PlacesGrid = () => {
  const [province, setProvince] = useState("");
  const [category, setCategory] = useState("");

  const content = [
    {
      id: 0,
      lugar: "lugar 1",
      provincia: "Tucumán",
      categoria: "montaña",
      img: "https://www.welcomeargentina.com/rio-negro/imagenes/rio-negro.jpg",
    },
    {
      id: 1,
      lugar: "lugar 2",
      provincia: "Tucumán",
      categoria: "selva",
      img: "https://www.viajes.com/wp-content/uploads/destinos-tc2/misiones-argentina.jpg",
    },
    {
      id: 2,
      lugar: "lugar 3",
      provincia: "Bs As",
      categoria: "montaña",
      img: "https://vivo247.com/wp-content/uploads/2020/10/salta-sello-viaje.jpg",
    },
    {
      id: 3,
      lugar: "lugar 4",
      provincia: "Bs as",
      categoria: "Playa",
      img: "https://www.clarin.com/img/2019/01/10/jgGG_BkgV_720x0__1.jpg",
    },
    {
      id: 4,
      lugar: "lugar 5",
      provincia: "Catamarca",
      categoria: "montaña",
      img: "https://volemos.nyc3.cdn.digitaloceanspaces.com/blog/wp-content/uploads/2020/01/ruta-de-los-6miles.jpg",
    },
    {
      id: 5,
      lugar: "lugar 6",
      provincia: "Tucumán",
      categoria: "Montaña",
      img: "https://periodicoparatodos.com.ar/wp-content/uploads/2022/01/1-800x445.jpg",
    },
    {
      id: 6,
      lugar: "lugar 7",
      provincia: "Misiones",
      categoria: "Cataratas",
      img: "https://www.expreso.info/files/2019-12/Iguazu_Catarata.jpg",
    },
    {
      id: 7,
      lugar: "lugar 8",
      provincia: "Jujuy",
      categoria: "Llanura",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/92/b9/5f/salinas-grandes-es-la.jpg?w=500&h=300&s=1",
    },
  ];

  return (
    <>
      <h1 className="text-center">LUGARES DE PROVINCIA</h1>
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
              <option value="provincia_3">Provincia 3</option>
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
            </Form.Select>
          </div>
        </div>
        <div className="btn-add-place d-flex justify-content-center">
          <button>Añadir Lugar</button>
        </div>
        <div className="row m-0">
          {content.map((p, i) => (
            <Lugar
              key={p.id}
              objeto={p}
              catSelect={category}
              provSelect={province}
            />
          ))}
        </div>
        <div className="div-pagination mt-5">
          <Pagination className="justify-content-center">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default PlacesGrid;
