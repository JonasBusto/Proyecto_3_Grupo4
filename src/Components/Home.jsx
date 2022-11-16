import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "../Styles/home.css";

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div>
        <div className="div-carousel">
          <Carousel fade activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://vivo247.com/wp-content/uploads/2020/10/salta-sello-viaje.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <div>
                  <h3 className="title-slider-location">Jujuy - Lugar 1</h3>
                  {/* <p className="d-none d-sm-block">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto harum placeat id quas ex excepturi totam expedita
                    fuga rerum laudantium...
                  </p> */}
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis
                    interdum....
                  </p>
                </div>
                <div className="slider-links">
                  <Link to="">Ver Más</Link>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://vivo247.com/wp-content/uploads/2020/10/salta-sello-viaje.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Jujuy - Lugar 1</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum....
                </p>
                <div className="slider-links">
                  <Link to="">Ver Más</Link>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://vivo247.com/wp-content/uploads/2020/10/salta-sello-viaje.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Jujuy - Lugar 3</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum....
                </p>
                <div className="slider-links">
                  <Link to="">Ver Más</Link>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="div-category-advertising">
          <div className="row m-0">
            <div className="col-12 col-md-6 div-categoria">
              <h1 className="text-center">Categorias</h1>
              <div className="div-container-category">
                <div className="row m-0 mx-auto div-link-category justify-content-between">
                  <div className="col-12 col-sm-6 d-flex justify-content-center">
                    <Link to="">Categoria 1</Link>
                  </div>
                  <div className="col-12 col-sm-6 d-flex justify-content-center">
                    <Link to="">Categoria 2</Link>
                  </div>
                </div>
                <div className="row m-0 mx-auto div-link-category justify-content-between">
                  <div className="col-12 col-sm-6 d-flex justify-content-center">
                    <Link to="">Categoria 1</Link>
                  </div>
                  <div className="col-12 col-sm-6 d-flex justify-content-center">
                    <Link to="">Categoria 2</Link>
                  </div>
                </div>
                <div className="row m-0 mx-auto div-link-category justify-content-between">
                  <div className="col-12 col-sm-6 d-flex justify-content-center">
                    <Link to="">Categoria 1</Link>
                  </div>
                  <div className="col-12 col-sm-6 d-flex justify-content-center">
                    <Link to="">Categoria 2</Link>
                  </div>
                </div>
                <div className="row m-0 mx-auto div-link-category justify-content-between">
                  <div className="col-12 col-sm-6 d-flex justify-content-center">
                    <Link to="">Categoria 1</Link>
                  </div>
                  <div className="col-12 col-sm-6 d-flex justify-content-center">
                    <Link to="">Categoria 2</Link>
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

        {/* <div className="div-provinces d-flex flex-column">
          <p className="text-center fs-1">Provincias mas visitadas</p>
          <div>
            <div className="row">
              <div className="col-12 col-md-8 d-flex flex-column p-0">
                <div className="row m-0">
                  <div className="col-12 p-0">
                    <div className="div-img-provinces">
                      <img
                        className="img-fluid"
                        src="https://www.welcomeargentina.com/rio-negro/imagenes/rio-negro.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row m-0">
                  <div className="col-12 p-0 col-md-6">
                    <div className="div-img-provinces">
                      <img
                        className="img-fluid"
                        src="https://www.viajes.com/wp-content/uploads/destinos-tc2/misiones-argentina.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-12 p-0 col-md-6">
                    <div className="div-img-provinces">
                      <img
                        className="img-fluid"
                        src="https://www.viajes.com/wp-content/uploads/destinos-tc2/misiones-argentina.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 p-0">
                <div className="row m-0">
                  <div className="col p-0">
                    <div className="div-img-provinces">
                      <img
                        className="img-fluid"
                        src="https://www.clarin.com/img/2019/11/06/a8GQ9c_x_1200x630__1.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row m-0">
                  <div className="col p-0">
                    <div className="div-img-provinces">
                      <img
                        className="img-fluid"
                        src="https://www.clarin.com/img/2019/11/06/a8GQ9c_x_1200x630__1.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row m-0">
                  <div className="col p-0">
                    <div className="div-img-provinces">
                      <img
                        className="img-fluid"
                        src="https://www.clarin.com/img/2019/11/06/a8GQ9c_x_1200x630__1.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="div-seeMore d-flex justify-content-center">
          <Link to="">VER MAS</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
