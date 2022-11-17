import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "../Styles/home.css";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "../Styles/slider-animations.css";

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const content = [
    {
      title: "Rio Negro - Lugar 1",
      description:
        "Agregar una descripción de cada lugar que aparece en recomendados. La idea es colocar la misma descripción que aparece en article page",
      image:
        "https://www.welcomeargentina.com/rio-negro/imagenes/rio-negro.jpg",
      user: "Chapulin Colorado",
      userProfile: "https://pbs.twimg.com/media/EVcjT-JXQAIq0Yy.jpg",
    },
    {
      title: "Misiones - Lugar 1",
      description:
        "Agregar una descripción de cada lugar que aparece en recomendados. La idea es colocar la misma descripción que aparece en article page",
      image:
        "https://www.viajes.com/wp-content/uploads/destinos-tc2/misiones-argentina.jpg",
      user: "Don Ramon",
      userProfile:
        "https://portal.andina.pe/EDPfotografia/Thumbnail/2013/09/02/000218071W.jpg",
    },
    {
      title: "Salta - Lugar 1",
      description:
        "Agregar una descripción de cada lugar que aparece en recomendados. La idea es colocar la misma descripción que aparece en article page",
      image:
        "https://vivo247.com/wp-content/uploads/2020/10/salta-sello-viaje.jpg",
      user: "El Zorro",
      userProfile:
        "https://www.lanacion.com.ar/resizer/wWlTepZ2pHuoyXZF3U7RR7C1iic=/309x206/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/MGYRO7LAGVBHBMR52AN5EKPQZY.jpg",
    },
  ];
  return (
    <>
      <div>
        <div className="mt-3">
          <Slider previousButton={<svg>s</svg>} className="slider-wrapper">
            {content.map((item, index) => (
              <div
                key={index}
                className="slider-content"
                style={{
                  background: `url('${item.image}') no-repeat center center`,
                }}
              >
                <div className="inner">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <div className="div-see-more-btn">
                    <Link to="">Ver Mas</Link>
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

        <div className="div-category-advertising">
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
                    <Link to="/montañas">Montañas</Link>
                  </div>
                  <div
                    className="col-12 p-0 col-sm-6 d-flex justify-content-center"
                    style={{
                      background: `url("https://s.ruta0.net/cache/img680/41345.jpg") no-repeat center center`,
                    }}
                  >
                    <Link to="">Selvas</Link>
                  </div>
                </div>
                <div className="row w-100 m-0 div-link-category justify-content-between">
                  <div
                    className="col-12 p-0 col-sm-6 d-flex justify-content-center"
                    style={{
                      background: `url("https://www.reportur.com/wp-content/uploads/2019/08/glaciar-e1565834650693.jpg") no-repeat center center`,
                    }}
                  >
                    <Link to="">Glaciares</Link>
                  </div>
                  <div
                    className="col-12 p-0 col-sm-6 d-flex justify-content-center"
                    style={{
                      background: `url("https://s.ruta0.net/cache/img680/41345.jpg") no-repeat center center`,
                    }}
                  >
                    <Link to="">Selvas</Link>
                  </div>
                </div>
                <div className="row w-100 m-0 div-link-category justify-content-between">
                  <div
                    className="col-12 p-0 col-sm-6 d-flex justify-content-center"
                    style={{
                      background: `url("https://www.tucumanturismo.gob.ar/carga/image/1470857806%20-%20Senda%20tafi%20del%20valle%20-%20Siambon%202.jpg") no-repeat top center`,
                    }}
                  >
                    <Link to="">Montañas</Link>
                  </div>
                  <div
                    className="col-12 p-0 col-sm-6 d-flex justify-content-center"
                    style={{
                      background: `url("https://s.ruta0.net/cache/img680/41345.jpg") no-repeat center center`,
                    }}
                  >
                    <Link to="">Selvas</Link>
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
        </div>

        <div className="div-provinces d-flex flex-column">
          <p className="text-center fs-1">Provincias mas visitadas</p>
          <div className="w-100 d-flex justify-content-center">
            <div className="row w-100 justify-content-center">
              <div
                className="col-12 col-md-8 d-flex flex-column p-0"
                style={{ border: "1px solid black", height: "40rem" }}
              >
                <div className="row m-0">
                  <div
                    className="col-12"
                    style={{ border: "1px solid black", height: "18rem" }}
                  ></div>
                </div>
                <div className="row div-row-col m-0">
                  <div
                    className="col-12 col-sm-4"
                    style={{
                      border: "1px solid black",
                      width: "33.3%",
                      height: "22rem",
                    }}
                  ></div>
                  <div
                    className="col-12 col-sm-4"
                    style={{
                      border: "1px solid black",
                      width: "33.3%",
                      height: "22rem",
                    }}
                  ></div>
                  <div
                    className="col-12 col-sm-4"
                    style={{
                      border: "1px solid black",
                      width: "33.3%",
                      height: "22rem",
                    }}
                  ></div>
                </div>
              </div>
              <div
                className="col-12 col-md-4 p-0"
                style={{ border: "1px solid black", height: "40rem" }}
              >
                <div className="row m-0">
                  <div
                    className="col-12"
                    style={{ border: "1px solid black", height: "13.3rem" }}
                  ></div>
                  <div
                    className="col-12"
                    style={{ border: "1px solid black", height: "13.3rem" }}
                  ></div>
                  <div
                    className="col-12"
                    style={{ border: "1px solid black", height: "13.3rem" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="div-seeMore d-flex justify-content-center">
          <Link to="">VER MAS</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
