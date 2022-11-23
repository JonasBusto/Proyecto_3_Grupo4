import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-animated-slider";
import content from "../arrayContent";
import "../Styles/home.css";
import "react-animated-slider/build/horizontal.css";
import "../Styles/slider-animations.css";

const Home = () => {
  const [arrayPlaces, setArrayPlaces] = useState(content);
  console.log(arrayPlaces);
  return (
    <>
      <div>
        <div className="mt-3">
          <Slider className="slider-wrapper">
            {/* {arrayPlaces.map((item, index) => 
              // item.destacado === true
              //   ? console.log("hola")
              //   : console.log("chao");
              // <div
              //   key={"lugar" + index}
              //   className="slider-content"
              //   style={{
              //     background: `url('${item.img.img1}') no-repeat center center`,
              //   }}
              // >
              //   <div className="inner">
              //     <h1>{item.lugar}</h1>
              //     <p>{item.descripcion}</p>
              //     <div className="div-see-more-btn">
              //       <Link to="/">Ver Mas</Link>
              //     </div>
              //   </div>
              //   <section>
              //     <img src={item.userProfile} alt={item.user} />
              //     <span>
              //       Recomendado por <strong>{item.user}</strong>
              //     </span>
              //   </section>
              // </div>
            )} */}
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
                    <Link to="/selvas">Selvas</Link>
                  </div>
                </div>
                <div className="row w-100 m-0 div-link-category justify-content-between">
                  <div
                    className="col-12 p-0 col-sm-6 d-flex justify-content-center"
                    style={{
                      background: `url("https://www.reportur.com/wp-content/uploads/2019/08/glaciar-e1565834650693.jpg") no-repeat center center`,
                    }}
                  >
                    <Link to="/glaciares">Glaciares</Link>
                  </div>
                  <div
                    className="col-12 p-0 col-sm-6 d-flex justify-content-center"
                    style={{
                      background: `url("https://s.ruta0.net/cache/img680/41345.jpg") no-repeat center center`,
                    }}
                  >
                    <Link to="/selvas">Selvas</Link>
                  </div>
                </div>
                <div className="row w-100 m-0 div-link-category justify-content-between">
                  <div
                    className="col-12 p-0 col-sm-6 d-flex justify-content-center"
                    style={{
                      background: `url("https://www.tucumanturismo.gob.ar/carga/image/1470857806%20-%20Senda%20tafi%20del%20valle%20-%20Siambon%202.jpg") no-repeat top center`,
                    }}
                  >
                    <Link to="/selvas">Montañas</Link>
                  </div>
                  <div
                    className="col-12 p-0 col-sm-6 d-flex justify-content-center"
                    style={{
                      background: `url("https://s.ruta0.net/cache/img680/41345.jpg") no-repeat center center`,
                    }}
                  >
                    <Link to="/selvas">Selvas</Link>
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
                        background: `url("https://content.r9cdn.net/rimg/dimg/ea/81/e9826474-ctry-10-171ef010f0f.jpg?width=1366&height=768&xhint=3715&yhint=2662&crop=true") no-repeat bottom center`,
                      }}
                    >
                      <Link to="/provincia=provincia_1">Provincia 1</Link>
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
                      <Link to="/provincia=provincia_2">Provincia 2</Link>
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
                      <Link to="/provincia=provincia_3">Provincia 3</Link>
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
                      <Link to="/provincia=provincia_3">Provincia 4</Link>
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
                      <Link to="/provincia=provincia_4">Provincia 5</Link>
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
                      <Link to="/provincia=provincia_5">Provincia 6</Link>
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
                      <Link to="/provincia=provincia_6">Provincia 7</Link>
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
                    background: `url("https://content.r9cdn.net/rimg/dimg/ea/81/e9826474-ctry-10-171ef010f0f.jpg?width=1366&height=768&xhint=3715&yhint=2662&crop=true") no-repeat bottom center`,
                  }}
                >
                  <Link to="/provincia=provincia_1">Provincia 1</Link>
                </div>
              </div>
              <div className="col-12 d-flex p-0" style={{ height: "13.3rem" }}>
                <div
                  className="div-img-provinces d-flex w-100"
                  style={{
                    background: `url("https://content.r9cdn.net/rimg/dimg/ea/81/e9826474-ctry-10-171ef010f0f.jpg?width=1366&height=768&xhint=3715&yhint=2662&crop=true") no-repeat bottom center`,
                  }}
                >
                  <Link to="/provincia=provincia_2">Provincia 2</Link>
                </div>
              </div>
              <div className="col-12 d-flex p-0" style={{ height: "13.3rem" }}>
                <div
                  className="div-img-provinces d-flex w-100"
                  style={{
                    background: `url("https://content.r9cdn.net/rimg/dimg/ea/81/e9826474-ctry-10-171ef010f0f.jpg?width=1366&height=768&xhint=3715&yhint=2662&crop=true") no-repeat top center`,
                  }}
                >
                  <Link to="/provincia=provincia_3">Provincia 3</Link>
                </div>
              </div>
              <div className="col-12 d-flex p-0" style={{ height: "13.3rem" }}>
                <div
                  className="div-img-provinces d-flex w-100"
                  style={{
                    background: `url("https://content.r9cdn.net/rimg/dimg/ea/81/e9826474-ctry-10-171ef010f0f.jpg?width=1366&height=768&xhint=3715&yhint=2662&crop=true") no-repeat top center`,
                  }}
                >
                  <Link to="/provincia=provincia_4">Provincia 4</Link>
                </div>
              </div>
              <div className="col-12 d-flex p-0" style={{ height: "13.3rem" }}>
                <div
                  className="div-img-provinces d-flex w-100"
                  style={{
                    background: `url("https://content.r9cdn.net/rimg/dimg/ea/81/e9826474-ctry-10-171ef010f0f.jpg?width=1366&height=768&xhint=3715&yhint=2662&crop=true") no-repeat center center`,
                  }}
                >
                  <Link to="/provincia=provincia_5">Provincia 5</Link>
                </div>
              </div>
              <div className="col-12 d-flex p-0" style={{ height: "13.3rem" }}>
                <div
                  className="div-img-provinces d-flex w-100"
                  style={{
                    background: `url("https://content.r9cdn.net/rimg/dimg/ea/81/e9826474-ctry-10-171ef010f0f.jpg?width=1366&height=768&xhint=3715&yhint=2662&crop=true") no-repeat center center`,
                  }}
                >
                  <Link to="/provincia=provincia_6">Provincia 6</Link>
                </div>
              </div>
              <div className="col-12 d-flex p-0" style={{ height: "13.3rem" }}>
                <div
                  className="div-img-provinces d-flex w-100"
                  style={{
                    background: `url("https://content.r9cdn.net/rimg/dimg/ea/81/e9826474-ctry-10-171ef010f0f.jpg?width=1366&height=768&xhint=3715&yhint=2662&crop=true") no-repeat center center`,
                  }}
                >
                  <Link to="/provincia=provincia_7">Provincia 7</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="div-seeMore d-flex justify-content-center">
          <Link to="/provincias">VER MAS</Link>
        </div> */}
      </div>
    </>
  );
};

export default Home;
