import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-animated-slider";
import content from "../arrayContent";
import "../Styles/home.css";
import "react-animated-slider/build/horizontal.css";
import "../Styles/slider-animations.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChampagneGlasses,
  faLandmark,
  faMountain,
  faPersonHiking,
  faTractor,
  faTree,
  faUmbrellaBeach,
  faWater,
} from "@fortawesome/free-solid-svg-icons";
import provinceArray from "../arrayProvinces";

const Home = () => {
  if (localStorage.getItem("Lugares") === null) {
    localStorage.setItem("Lugares", JSON.stringify(content));
  }
  const [arrayPlaces, setArrayPlaces] = useState(
    JSON.parse(localStorage.getItem("Lugares")) || []
  );
  let arrayFeaturedAux = [];
  for (let i = 0; i < arrayPlaces.length; i++) {
    if (arrayPlaces[i].destacado === true) {
      arrayFeaturedAux.push(arrayPlaces[i]);
    }
  }
  const [arrayFeatured, setArrayFeatured] = useState(arrayFeaturedAux);

  return (
    <>
      <div>
        <div className="mt-0">
          <Slider autoplay className="slider-wrapper">
            {arrayFeatured.map((item) => (
              <div
                key={item.id}
                className="slider-content"
                style={{
                  background: `url('${item.img.img1}') no-repeat center center`,
                }}
              >
                <div className="inner">
                  <h1>{item.lugar.toUpperCase()}</h1>
                  <p>{item.descripcion.toUpperCase()}</p>
                  <div className="div-see-more-btn">
                    <Link to={`/lugar/${item.id}`}>VER MÁS</Link>
                  </div>
                </div>
                <section>
                  <img src="/logo-RollingTravel.png" alt={item.user} />
                  <span>
                    DESTACADO POR <strong>ROLLING TRAVEL</strong>
                  </span>
                </section>
              </div>
            ))}
          </Slider>
        </div>

        <div className="mt-5">
          <div className="row m-0">
            <div className="col-12 col-md-6 div-category-custom-bg">
              <h1 className="text-center mb-2 mt-1">CATEGORIAS</h1>
              <div className="row m-0">
                <div className="col-3 col-icon-category d-flex flex-column align-items-center">
                  <Link to={`/lugares/todas/montaña`}>
                    <FontAwesomeIcon icon={faMountain} />
                  </Link>
                  <p>MONTAÑA</p>
                </div>
                <div className="col-3 col-icon-category d-flex flex-column align-items-center">
                  <Link to={`/lugares/todas/selva`}>
                    <FontAwesomeIcon icon={faTree} />
                  </Link>
                  <p>SELVA</p>
                </div>
                <div className="col-3 col-icon-category d-flex flex-column align-items-center">
                  <Link to={`/lugares/todas/playa`}>
                    <FontAwesomeIcon icon={faUmbrellaBeach} />
                  </Link>
                  <p>PLAYA</p>
                </div>
                <div className="col-3 col-icon-category d-flex flex-column align-items-center">
                  <Link to={`/lugares/todas/cataratas`}>
                    <FontAwesomeIcon icon={faWater} />
                  </Link>
                  <p>CATARATAS</p>
                </div>
                <div className="col-3 col-icon-category d-flex flex-column align-items-center">
                  <Link to={`/lugares/todas/festival`}>
                    <FontAwesomeIcon icon={faChampagneGlasses} />
                  </Link>
                  <p>FESTIVALES</p>
                </div>
                <div className="col-3 col-icon-category d-flex flex-column align-items-center">
                  <Link to={`/lugares/todas/senderismo`}>
                    <FontAwesomeIcon icon={faPersonHiking} />
                  </Link>
                  <p>SENDERISMO</p>
                </div>
                <div className="col-3 col-icon-category d-flex flex-column align-items-center">
                  <Link to={`/lugares/todas/rural`}>
                    <FontAwesomeIcon icon={faTractor} />
                  </Link>
                  <p>RURAL</p>
                </div>
                <div className="col-3 col-icon-category d-flex flex-column align-items-center">
                  <Link to={`/lugares/todas/historia`}>
                    <FontAwesomeIcon icon={faLandmark} />
                  </Link>
                  <p>HISTORIA</p>
                </div>
              </div>
            </div>
            <div className="col-4 col-md-6 d-none d-md-flex div-advertising justify-content-center align-items-center">
              <img
                className="img-fluid"
                src="https://media.rpctv.com/p/bd46d329195159a20a773a02e983e540/adjuntos/314/imagenes/017/976/0017976660/1200x675/smart/panini-1jpg.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-center fs-1">LUGARES CON MAS LIKES</p>
          <div className="div-place-more-liked d-flex">
            {arrayPlaces.map((l) => (
              <Link
                key={l.id}
                to={`/lugar/${l.id}`}
                className="div-img-more-liked"
              >
                <img src={l.img.img1} alt="" />
                <h1 className="title-place-more-liked d-flex flex-column align-items-center">
                  {l.lugar.toUpperCase()}
                  <b>{l.provincia.toUpperCase()}</b>
                </h1>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <p className="text-center fs-1">SOBRE NOSOTROS</p>
          <div className="div-about-us-home d-flex flex-column align-items-center justify-content-center">
            <p className="text-center text-about-us fs-1">GRUPO 4.JSX</p>
            <p className="text-about-us2">
              Somos un grupo que le gusta trabajar en equipo y le apasiciona la
              programación, buscando el mejor resultado para todos.
            </p>
            <Link to="/nosotros">CONOCENOS</Link>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-center fs-1">PROVINCIAS</p>
          <div className="div-place-more-liked d-flex">
            {provinceArray.map((p) => (
              <Link
                key={p.idProvince}
                to={`/lugares/${p.tipo}/todas`}
                className="div-img-more-liked"
              >
                <img src={p.img} alt="img_province" />
                <h1 className="title-place-more-liked d-flex flex-column align-items-center">
                  {p.nombre.toUpperCase()}
                </h1>
              </Link>
            ))}
          </div>
        </div>

        <div className="my-5">
          <div className="div-more-place-home d-flex flex-column align-items-center justify-content-center">
            <p className="text-center text-more-place fs-1">
              TODOS LOS LUGARES
            </p>
            <Link to={`/lugares/todas/todas`}>EXPLORAR MÁS</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
