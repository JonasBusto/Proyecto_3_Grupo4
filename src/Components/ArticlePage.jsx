import React, { useState, useEffect } from "react";
import "../Styles/articlePage.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";

const ArticlePage = () => {
  const content = {
    id: 0,
    lugar: "Simoca",
    provincia: "Tucumán",
    categoria: "montaña",
    descripcion: "descripción del lugar 1",
    img: {
      img1: "https://cdn-sp.radionacional.com.ar/wp-content/uploads/2020/01/Simoca.jpg",
      img2: "https://upload.wikimedia.org/wikipedia/commons/2/22/Tucuman_Simoca_Plaza.JPG",
      img3: "https://mapio.net/images-p/42423331.jpg",
      img4: "https://media.elpatagonico.com/p/ee309b8bcd5453f7af74287b020b7f4b/adjuntos/193/imagenes/010/199/0010199640/1200x675/smart/simoca2jpg.jpg",
      img5: "https://www.tucumanturismo.gob.ar/carga/image/festival%20sulky.jpg",
    },
    liked: false,
  };

  const [objetoPrueba, setObjetoPrueba] = useState(content);
  const [comentarios, setComentarios] = useState([]);
  const images = [
    {
      original: objetoPrueba.img.img1,
      thumbnail: objetoPrueba.img.img1,
    },
    {
      original: objetoPrueba.img.img2,
      thumbnail: objetoPrueba.img.img2,
    },
    {
      original: objetoPrueba.img.img3,
      thumbnail: objetoPrueba.img.img3,
    },
    {
      original: objetoPrueba.img.img4,
      thumbnail: objetoPrueba.img.img4,
    },
    {
      original: objetoPrueba.img.img5,
      thumbnail: objetoPrueba.img.img5,
    },
  ];

  useEffect(() => {
    console.log("Comentarios: ", comentarios);
  }, [comentarios]);

  return (
    <>
      <div>
        <div
          className="div-presentation d-flex flex-column"
          style={{
            background: `url(${objetoPrueba.img.img1}) no-repeat center center`,
          }}
        >
          <div className="div-row">
            <div className="row m-0 h-100 mx-auto">
              <div className="col-12 col-md-8 d-flex align-items-center justify-content-center">
                <div className="div-title-place">
                  <h1 className="title-place">
                    <b className="text-white">Todo</b>{" "}
                    <b className="text-black">sobre</b>{" "}
                    <b className="text-orange">{objetoPrueba.lugar}</b>
                  </h1>
                  <p className="welcome-place">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias adipisci eum sint nihil, recusandae, impedit,
                  </p>
                  <div className="d-flex justify-content-center div-btn-see-more">
                    <button>Ver más</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 d-none d-md-flex flex-column align-items-center justify-content-center div-detail-hero">
                <div className="div-title-place2">
                  <p>
                    Valoracion: <b className="text-orange"></b>
                  </p>
                  <p>
                    Categoria:{" "}
                    <b className="text-orange">{objetoPrueba.categoria}</b>
                  </p>
                  <p>
                    Provincia:{" "}
                    <b className="text-orange">{objetoPrueba.provincia}</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto" style={{ maxWidth: "1300px" }}>
          <div className="mt-5">
            <div className="row m-0">
              <div className="col-12 col-lg-7">
                <ImageGallery items={images} />
              </div>
              <div className="col-12 col-lg-5 d-flex flex-column">
                <div className="mt-4 mt-lg-0">
                  <h1 className="text-orange">Descripcion</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    magni in a iste modi! Repellat corporis omnis ab ullam
                    deleniti ut eos suscipit. Numquam similique ratione amet
                    voluptates exercitationem reprehenderit?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 d-block d-md-none">
            <h1 className="text-orange">Detalles</h1>
            <p>1. Validación: </p>
            <p>2. Categoria: </p>
            <p>3. Provincia: </p>
          </div>
          <div className="p-2">
            <h1 className="text-orange">Servicios</h1>
            <p>
              1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              magni in a iste modi! Repellat corporis omnis ab ullam deleniti ut
              eos suscipit. Numquam similique ratione amet voluptates
              exercitationem reprehenderit?
            </p>
            <p>
              2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              magni in a iste modi! Repellat corporis omnis ab ullam deleniti ut
              eos suscipit. Numquam similique ratione amet voluptates
              exercitationem reprehenderit?
            </p>
            <p>
              2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              magni in a iste modi! Repellat corporis omnis ab ullam deleniti ut
              eos suscipit. Numquam similique ratione amet voluptates
              exercitationem reprehenderit?
            </p>
            <p>
              2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              magni in a iste modi! Repellat corporis omnis ab ullam deleniti ut
              eos suscipit. Numquam similique ratione amet voluptates
              exercitationem reprehenderit?
            </p>
          </div>
          <div className="p-2">
            <h1 className="text-orange">Tips</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              enim delectus itaque id omnis facilis optio saepe, eveniet,
              quibusdam explicabo quos perferendis modi? Assumenda at nam,
              consequuntur accusamus magni expedita. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Illo, nemo deleniti ab molestiae aut
              ipsum. Ducimus asperiores quae facere deserunt esse nam
              reprehenderit eligendi cupiditate amet harum, praesentium fuga
              natus? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Eaque ad consequuntur enim, ducimus esse, repellendus possimus
              ipsam dicta, quibusdam dolorum tempora. Voluptate natus reiciendis
              dolorem iste voluptatum ex. Aliquam, nisi.
            </p>
          </div>
          <div className="p-2">
            <div>
              <h1 className="text-orange">Comentarios</h1>
              <p>
                Todas las opiniones han sido escritas por clientes reales que
                han reservado con nosotros.
              </p>
            </div>
            {comentarios.map((c) => (
              <div key={c.idReseña} className="d-flex flex-column px-5 pt-1">
                <div>Valoraciones: {c.valoracionRealizada} / 5 estrellas</div>
                <div className="d-flex">
                  <b>{c.nombreUsuario}</b>
                  <p className="mx-1 mb-0">-</p>
                  <p className="mb-0">07/12/2019</p>
                </div>
                <div>
                  <p>{c.reseñaRealizada}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-2">
            <h1 className="text-orange">Escribe tu reseña</h1>
            <Formik
              initialValues={{
                reseña: "",
                nombre: "",
                valoracion: "",
              }}
              validate={(valuesInput) => {
                let errors = {};

                if (valuesInput.reseña.trim() === "") {
                  errors.reseña = "Campo 'Reseña' vacio.";
                } else if (valuesInput.reseña.trim().split("").length < 5) {
                  errors.reseña =
                    "El lugar debe tener entre minimamente 5 caracteres";
                }

                if (valuesInput.nombre.trim() === "") {
                  errors.nombre = "Campo 'Nombre' vacio.";
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valuesInput.nombre)) {
                  errors.nombre = "Nombre invalido.";
                } else if (
                  valuesInput.nombre.trim().split("").length < 5 ||
                  valuesInput.nombre.trim().split("").length > 30
                ) {
                  errors.nombre =
                    "El Nombre debe tener entre 5 y 30 caracteres.";
                }

                if (valuesInput.valoracion === "") {
                  errors.valoracion = "Debe realizar una valoración.";
                }

                return errors;
              }}
              onSubmit={(valuesInput, { resetForm }) => {
                setComentarios([
                  ...comentarios,
                  {
                    idReseña: comentarios.length,
                    reseñaRealizada: valuesInput.reseña,
                    nombreUsuario: valuesInput.nombre,
                    valoracionRealizada: valuesInput.valoracion,
                  },
                ]);
                resetForm({});
              }}
            >
              {({
                handleSubmit,
                errors,
                touched,
                values,
                handleChange,
                handleBlur,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="reseña"
                      placeholder="Ingresa tu reseña"
                      value={values.reseña}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.reseña && touched.reseña && (
                      <Form.Text className="text-muted">
                        {errors.reseña}
                      </Form.Text>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="nombre"
                      placeholder="Ingresar nombre"
                      value={values.nombre}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.nombre && touched.nombre && (
                      <Form.Text className="text-muted">
                        {errors.nombre}
                      </Form.Text>
                    )}
                  </Form.Group>
                  <Form.Select
                    className="mx-auto"
                    aria-label="Default select example"
                    name="valoracion"
                    value={values.valoracion}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Seleccione Valoración</option>
                    <option value="1">1 Estrella</option>
                    <option value="2">2 Estrella</option>
                    <option value="3">3 Estrella</option>
                    <option value="4">4 Estrella</option>
                    <option value="5">5 Estrella</option>
                  </Form.Select>
                  {errors.valoracion && touched.valoracion && (
                    <Form.Text className="text-muted">
                      {errors.valoracion}
                    </Form.Text>
                  )}
                  <button type="submit">Añadir</button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlePage;
