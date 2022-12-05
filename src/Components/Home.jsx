import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/home.css";
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
import Carousel from "react-bootstrap/Carousel";
import Spinner from "react-bootstrap/Spinner";
import BoxComments from "./BoxComments";

const Home = ({ placesDb, userLDb }) => {
  const [arrayProvincesDB, setArrayProvincesDB] = useState([]);
  const [commentsDB, setCommentsDB] = useState([]);
  useEffect(() => {
    fetch("https://proyecto-3-backend.vercel.app/showProvince")
      .then((res) => res.json())
      .then((data) => setArrayProvincesDB(data));

    fetch("https://proyecto-3-backend.vercel.app/showComments")
      .then((res) => res.json())
      .then((data) => setCommentsDB(data));
  }, []);

  return (
    <>
      <div>
        <div className="mt-0">
          <Carousel>
            {placesDb.length !== 0 ? (
              placesDb.map(
                (item) =>
                  item.featured === true && (
                    <Carousel.Item
                      className="carousel-item-custom"
                      key={item._id + "place"}
                      interval={2000}
                    >
                      <img
                        className="d-block w-100"
                        src={item.img.img1}
                        alt="First slide"
                      />
                      <Carousel.Caption className="carousel-caption-custom">
                        <h1>{item.namePlace.toUpperCase()}</h1>
                        <p>{item.description.toUpperCase()}</p>
                        <div className="div-see-more-btn">
                          <Link to={`/lugar/${item._id}`}>VER MÁS</Link>
                        </div>
                      </Carousel.Caption>
                    </Carousel.Item>
                  )
              )
            ) : (
              <div className="d-flex align-items-center justify-content-center my-5">
                <Spinner animation="border" className="sp" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            )}
          </Carousel>
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
                  <Link to={`/lugares/todas/llamativo`}>
                    <FontAwesomeIcon icon={faChampagneGlasses} />
                  </Link>
                  <p>LLAMATIVO</p>
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
            <a
              href="https://paninitienda.com/collections/fifa-world-cup-qatar-2022"
              target="_blank"
              className="col-4 col-md-6 d-none d-md-flex div-advertising justify-content-center align-items-center"
            >
              <img
                className="img-fluid"
                src="https://media.rpctv.com/p/bd46d329195159a20a773a02e983e540/adjuntos/314/imagenes/017/976/0017976660/1200x675/smart/panini-1jpg.jpg"
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-center fs-1">LUGARES CON MAS LIKES</p>
          <div className="div-place-more-liked d-flex">
            {placesDb.length !== 0 ? (
              placesDb.map((l) => (
                <Link
                  key={l._id}
                  to={`/lugar/${l._id}`}
                  className="div-img-more-liked"
                >
                  <img src={l.img.img1} alt="" />
                  <h1 className="title-place-more-liked d-flex flex-column align-items-center">
                    {l.namePlace.toUpperCase()}
                    <b>{l.province.toUpperCase()}</b>
                  </h1>
                </Link>
              ))
            ) : (
              <h1>Cargando</h1>
            )}
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
            {arrayProvincesDB.length !== 0 ? (
              arrayProvincesDB.map((p) => (
                <Link
                  key={p._id}
                  to={`/lugares/${p.type}/todas`}
                  className="div-img-more-liked"
                >
                  <img src={p.img} alt="img_province" />
                  <h1 className="title-place-more-liked d-flex flex-column align-items-center">
                    {p.nameProvince.toUpperCase()}
                  </h1>
                </Link>
              ))
            ) : (
              <h1>cargando</h1>
            )}
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

        <div className="mt-5">
          <p className="text-center fs-1">COMENTARIOS</p>
          <p className="px-2">
            Puede aportar un feedback acerca de la pagina en comentarios, o lo
            que deseé. Muchas gracias
          </p>
          <BoxComments userLDb={userLDb} />
          {commentsDB.length !== 0 ? (
            commentsDB.map((c, i) => (
              <div className="mt-3 comment-box-custom" key={i + "comment"}>
                <div className="row m-0">
                  <div className="col-2 div-user-comment p-0">
                    <img src={c.userProfile} alt="" />
                  </div>
                  <div className="col-10 d-flex flex-column div-comment-name p-0">
                    <div className="d-flex div-name-date">
                      <b className="title-name-user">{c.user}</b>
                      <b className="title-date-user">{c.date}</b>
                    </div>
                    <p className="m-0">{c.infoComment}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h6>
              No se realizaron comentarios. Haz uno, y se el primero en hacerlo.
            </h6>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
