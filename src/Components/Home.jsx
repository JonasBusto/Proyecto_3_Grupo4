import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-animated-slider";
import content from "../arrayContent";
import "../Styles/home.css";
import "react-animated-slider/build/horizontal.css";
import "../Styles/slider-animations.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMountain,
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
                  <h1>{item.lugar}</h1>
                  <p>{item.descripcion}</p>
                  <div className="div-see-more-btn">
                    <Link to={`/lugar/${item.id}`}>Ver Mas</Link>
                  </div>
                </div>
                <section>
                  <img src={item.userProfile} alt={item.user} />
                  <span>
                    Recomendado por <strong>{item.user}</strong>
                  </span>
                </section>
              </div>
            ))}
          </Slider>
        </div>

        {/* <div className="div-category-advertising">
          <div className="row m-0">
            <div className="col-12 col-md-6 div-categoria">
              <h1 className="text-center">Categorias</h1>
              <div className="div-container-category d-flex flex-column justify-content-between px-3 pt-0">
                <div className="row w-100 m-0 div-link-category justify-content-between">
                  <div
                    className="col-12 p-0 col-sm-6 d-flex justify-content-center"
                    style={{
                      background: `url("https://www.tucumanturismo.gob.ar/carga/image/1470857806%20-%20Senda%20tafi%20del%20valle%20-%20Siambon%202.jpg") no-repeat top center`,
                    }}
                  >
                    <Link to={`/lugares/todas/montaña`}>Montañas</Link>
                  </div>
                  <div
                    className="col-12 p-0 col-sm-6 d-flex justify-content-center"
                    style={{
                      background: `url("https://s.ruta0.net/cache/img680/41345.jpg") no-repeat center center`,
                    }}
                  >
                    <Link to={`/lugares/todas/selva`}>Selvas</Link>
                  </div>
                </div>
                <div className="row w-100 m-0 div-link-category justify-content-between">
                  <div
                    className="col-12 p-0 col-sm-6 d-flex justify-content-center"
                    style={{
                      background: `url("https://www.reportur.com/wp-content/uploads/2019/08/glaciar-e1565834650693.jpg") no-repeat center center`,
                    }}
                  >
                    <Link to={`/lugares/todas/llamativo`}>Llamativo</Link>
                  </div>
                  <div
                    className="col-12 p-0 col-sm-6 d-flex justify-content-center"
                    style={{
                      background: `url("https://s.ruta0.net/cache/img680/41345.jpg") no-repeat center center`,
                    }}
                  >
                    <Link to={`/lugares/todas/playa`}>Playas</Link>
                  </div>
                </div>
                <div className="row w-100 m-0 div-link-category justify-content-between">
                  <div
                    className="col-12 p-0 col-sm-6 d-flex justify-content-center"
                    style={{
                      background: `url("https://www.tucumanturismo.gob.ar/carga/image/1470857806%20-%20Senda%20tafi%20del%20valle%20-%20Siambon%202.jpg") no-repeat top center`,
                    }}
                  >
                    <Link to={`/lugares/todas/rural`}>Rural</Link>
                  </div>
                  <div
                    className="col-12 p-0 col-sm-6 d-flex justify-content-center"
                    style={{
                      background: `url("https://s.ruta0.net/cache/img680/41345.jpg") no-repeat center center`,
                    }}
                  >
                    <Link to={`/lugares/todas/cataratas`}>Cataratas</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 d-none d-md-flex div-advertising justify-content-center align-items-center">
              <img
                className="img-fluid"
                src="https://media.rpctv.com/p/bd46d329195159a20a773a02e983e540/adjuntos/314/imagenes/017/976/0017976660/1200x675/smart/panini-1jpg.jpg"
                alt=""
              />
            </div>
          </div>
        </div> */}

        <div className="mt-5">
          <div className="row m-0">
            <div className="col-12 col-md-6">
              <h1 className="text-center mb-2">CATEGORIAS</h1>
              <div className="row m-0">
                <div className="col-3 col-icon-category d-flex flex-column align-items-center">
                  <Link to="/">
                    <FontAwesomeIcon icon={faMountain} />
                  </Link>
                  <p>MONTAÑA</p>
                </div>
                <div className="col-3 col-icon-category d-flex flex-column align-items-center">
                  <Link to="/">
                    <FontAwesomeIcon icon={faTree} />
                  </Link>
                  <p>SELVA</p>
                </div>
                <div className="col-3 col-icon-category d-flex flex-column align-items-center">
                  <Link to="/">
                    <FontAwesomeIcon icon={faUmbrellaBeach} />
                  </Link>
                  <p>PLAYA</p>
                </div>
                <div className="col-3 col-icon-category d-flex flex-column align-items-center">
                  <Link to="/">
                    <FontAwesomeIcon icon={faWater} />
                  </Link>
                  <p>CATARATAS</p>
                </div>
                <div className="col-3 col-icon-category d-flex flex-column align-items-center">
                  <Link to="/">
                    <FontAwesomeIcon icon={faMountain} />
                  </Link>
                  <p>FESTIVALES</p>
                </div>
                <div className="col-3 col-icon-category d-flex flex-column align-items-center">
                  <Link to="/">
                    <FontAwesomeIcon icon={faTree} />
                  </Link>
                  <p>SELVA</p>
                </div>
                <div className="col-3 col-icon-category d-flex flex-column align-items-center">
                  <Link to="/">
                    <FontAwesomeIcon icon={faUmbrellaBeach} />
                  </Link>
                  <p>PLAYA</p>
                </div>
                <div className="col-3 col-icon-category d-flex flex-column align-items-center">
                  <Link to="/">
                    <FontAwesomeIcon icon={faWater} />
                  </Link>
                  <p>CATARATAS</p>
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

        {/* <div className="div-provinces d-flex flex-column">
          <p className="text-center fs-1">Provincias mas visitadas</p>

          <div className="w-100 div-sm-provinces-none">
            <div className="row w-100 justify-content-center">
              <div
                className="col-12 col-md-8 d-flex flex-column p-0"
                style={{ height: "40rem" }}
              >
                <div className="row m-0">
                  <div
                    className="col-12 d-flex w-100 p-0 div-col-img-provinces2"
                    style={{ height: "18rem" }}
                  >
                    <div
                      className="div-img-provinces d-flex w-100"
                      style={{
                        background: `url("https://www.argentina.gob.ar/sites/default/files/plazaindependencia_en-tucuman.jpg") no-repeat center center`,
                      }}
                    >
                      <Link to={`/lugares/Tucumán/todas`}>Tucumán</Link>
                    </div>
                  </div>
                </div>
                <div className="row div-row-col m-0 div-col-img-provinces2">
                  <div
                    className="col-12 col-sm-4 p-0 d-flex"
                    style={{
                      width: "33.3%",
                      height: "22rem",
                    }}
                  >
                    <div
                      className="div-img-provinces d-flex w-100"
                      style={{
                        background: `url("https://content.r9cdn.net/rimg/dimg/ea/81/e9826474-ctry-10-171ef010f0f.jpg?width=1366&height=768&xhint=3715&yhint=2662&crop=true") no-repeat bottom center`,
                      }}
                    >
                      <Link to={`/lugares/Bs As/todas`}>Buenos Aires</Link>
                    </div>
                  </div>
                  <div
                    className="col-12 col-sm-4 p-0 d-flex"
                    style={{
                      width: "33.3%",
                      height: "22rem",
                    }}
                  >
                    <div
                      className="div-img-provinces d-flex w-100"
                      style={{
                        background: `url("https://content.r9cdn.net/rimg/dimg/ea/81/e9826474-ctry-10-171ef010f0f.jpg?width=1366&height=768&xhint=3715&yhint=2662&crop=true") no-repeat top center`,
                      }}
                    >
                      <Link to={`/lugares/Catamarca/todas`}>Catamarca</Link>
                    </div>
                  </div>
                  <div
                    className="col-12 col-sm-4 p-0 d-flex"
                    style={{
                      width: "33.3%",
                      height: "22rem",
                    }}
                  >
                    <div
                      className="div-img-provinces d-flex w-100"
                      style={{
                        background: `url("https://content.r9cdn.net/rimg/dimg/ea/81/e9826474-ctry-10-171ef010f0f.jpg?width=1366&height=768&xhint=3715&yhint=2662&crop=true") no-repeat top center`,
                      }}
                    >
                      <Link to={`/lugares/misiones/todas`}>Misiones</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 p-0" style={{ height: "40rem" }}>
                <div className="row div-row-col-p m-0">
                  <div
                    className="col-12 d-flex p-0"
                    style={{ height: "13.3rem" }}
                  >
                    <div
                      className="div-img-provinces d-flex w-100"
                      style={{
                        background: `url("https://content.r9cdn.net/rimg/dimg/ea/81/e9826474-ctry-10-171ef010f0f.jpg?width=1366&height=768&xhint=3715&yhint=2662&crop=true") no-repeat center center`,
                      }}
                    >
                      <Link to={`/lugares/jujuy/todas`}>Jujuy</Link>
                    </div>
                  </div>
                  <div
                    className="col-12 d-flex p-0"
                    style={{ height: "13.3rem" }}
                  >
                    <div
                      className="div-img-provinces d-flex w-100"
                      style={{
                        background: `url("https://content.r9cdn.net/rimg/dimg/ea/81/e9826474-ctry-10-171ef010f0f.jpg?width=1366&height=768&xhint=3715&yhint=2662&crop=true") no-repeat center center`,
                      }}
                    >
                      <Link to={`/lugares/chubut/todas`}>Chubut</Link>
                    </div>
                  </div>
                  <div
                    className="col-12 d-flex p-0"
                    style={{ height: "13.3rem" }}
                  >
                    <div
                      className="div-img-provinces d-flex w-100"
                      style={{
                        background: `url("https://content.r9cdn.net/rimg/dimg/ea/81/e9826474-ctry-10-171ef010f0f.jpg?width=1366&height=768&xhint=3715&yhint=2662&crop=true") no-repeat center center`,
                      }}
                    >
                      <Link to={`/lugares/mendoza/todas`}>Mendoza</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="div-sm-display-block">
            <div className="row m-0">
              <div className="col-12 d-flex p-0" style={{ height: "13.3rem" }}>
                <div
                  className="div-img-provinces d-flex w-100"
                  style={{
                    background: `url("https://www.argentina.gob.ar/sites/default/files/plazaindependencia_en-tucuman.jpg") no-repeat center center`,
                  }}
                >
                  <Link to={`/lugares/Tucumán/todas`}>Tucumán</Link>
                </div>
              </div>
              <div className="col-12 d-flex p-0" style={{ height: "13.3rem" }}>
                <div
                  className="div-img-provinces d-flex w-100"
                  style={{
                    background: `url("https://content.r9cdn.net/rimg/dimg/ea/81/e9826474-ctry-10-171ef010f0f.jpg?width=1366&height=768&xhint=3715&yhint=2662&crop=true") no-repeat bottom center`,
                  }}
                >
                  <Link to={`/lugares/Bs As/todas`}>Buenos Aires</Link>
                </div>
              </div>
              <div className="col-12 d-flex p-0" style={{ height: "13.3rem" }}>
                <div
                  className="div-img-provinces d-flex w-100"
                  style={{
                    background: `url("https://content.r9cdn.net/rimg/dimg/ea/81/e9826474-ctry-10-171ef010f0f.jpg?width=1366&height=768&xhint=3715&yhint=2662&crop=true") no-repeat top center`,
                  }}
                >
                  <Link to={`/lugares/Catamarca/todas`}>Catamarca</Link>
                </div>
              </div>
              <div className="col-12 d-flex p-0" style={{ height: "13.3rem" }}>
                <div
                  className="div-img-provinces d-flex w-100"
                  style={{
                    background: `url("https://content.r9cdn.net/rimg/dimg/ea/81/e9826474-ctry-10-171ef010f0f.jpg?width=1366&height=768&xhint=3715&yhint=2662&crop=true") no-repeat top center`,
                  }}
                >
                  <Link to={`/lugares/misiones/todas`}>Misiones</Link>
                </div>
              </div>
              <div className="col-12 d-flex p-0" style={{ height: "13.3rem" }}>
                <div
                  className="div-img-provinces d-flex w-100"
                  style={{
                    background: `url("https://content.r9cdn.net/rimg/dimg/ea/81/e9826474-ctry-10-171ef010f0f.jpg?width=1366&height=768&xhint=3715&yhint=2662&crop=true") no-repeat center center`,
                  }}
                >
                  <Link to={`/lugares/jujuy/todas`}>Jujuy</Link>
                </div>
              </div>
              <div className="col-12 d-flex p-0" style={{ height: "13.3rem" }}>
                <div
                  className="div-img-provinces d-flex w-100"
                  style={{
                    background: `url("https://content.r9cdn.net/rimg/dimg/ea/81/e9826474-ctry-10-171ef010f0f.jpg?width=1366&height=768&xhint=3715&yhint=2662&crop=true") no-repeat center center`,
                  }}
                >
                  <Link to={`/lugares/chubut/todas`}>Chubut</Link>
                </div>
              </div>
              <div className="col-12 d-flex p-0" style={{ height: "13.3rem" }}>
                <div
                  className="div-img-provinces d-flex w-100"
                  style={{
                    background: `url("https://content.r9cdn.net/rimg/dimg/ea/81/e9826474-ctry-10-171ef010f0f.jpg?width=1366&height=768&xhint=3715&yhint=2662&crop=true") no-repeat center center`,
                  }}
                >
                  <Link to={`/lugares/mendoza/todas`}>Mendoza</Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="div-seeMore d-flex justify-content-center">
          <Link to="/provincias">VER MAS</Link>
        </div> */}
      </div>
    </>
  );
};

export default Home;
