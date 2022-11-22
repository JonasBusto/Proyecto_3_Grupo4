import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import LikeElement from "./LikeElement";
import "../Styles/likesPage.css";

const LikesPage = () => {
  const [province, setProvince] = useState("");
  const [category, setCategory] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const content = [
    {
      id: 0,
      lugar: "lugar 1",
      provincia: "Tucumán",
      categoria: "montaña",
      descripcion: "descripción del lugar 1",
      img: "https://www.welcomeargentina.com/rio-negro/imagenes/rio-negro.jpg",
      liked: false,
    },
    {
      id: 1,
      lugar: "lugar 2",
      provincia: "Tucumán",
      categoria: "selva",
      descripcion: "descripción del lugar 2",
      img: "https://www.viajes.com/wp-content/uploads/destinos-tc2/misiones-argentina.jpg",
      liked: false,
    },
    {
      id: 2,
      lugar: "lugar 3",
      provincia: "Bs As",
      categoria: "montaña",
      descripcion: "descripción del lugar 3",
      img: "https://vivo247.com/wp-content/uploads/2020/10/salta-sello-viaje.jpg",
      liked: true,
    },
    {
      id: 3,
      lugar: "lugar 4",
      provincia: "Bs as",
      categoria: "Playa",
      descripcion: "descripción del lugar 4",
      img: "https://www.clarin.com/img/2019/01/10/jgGG_BkgV_720x0__1.jpg",
      liked: false,
    },
    {
      id: 4,
      lugar: "lugar 5",
      provincia: "Catamarca",
      categoria: "montaña",
      descripcion: "descripción del lugar 5",
      img: "https://volemos.nyc3.cdn.digitaloceanspaces.com/blog/wp-content/uploads/2020/01/ruta-de-los-6miles.jpg",
      liked: false,
    },
    {
      id: 5,
      lugar: "lugar 6",
      provincia: "Tucumán",
      categoria: "Montaña",
      descripcion: "descripción del lugar 6",
      img: "https://periodicoparatodos.com.ar/wp-content/uploads/2022/01/1-800x445.jpg",
      liked: false,
    },
    {
      id: 6,
      lugar: "lugar 7",
      provincia: "Misiones",
      categoria: "Cataratas",
      descripcion: "descripción del lugar 7",
      img: "https://www.expreso.info/files/2019-12/Iguazu_Catarata.jpg",
      liked: false,
    },
    {
      id: 7,
      lugar: "lugar 8",
      provincia: "Jujuy",
      categoria: "Llanura",
      descripcion: "descripción del lugar 8",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/92/b9/5f/salinas-grandes-es-la.jpg?w=500&h=300&s=1",
      liked: false,
    },
    {
      id: 8,
      lugar: "lugar 9",
      provincia: "Chubut",
      categoria: "Montaña",
      descripcion: "descripción del lugar 9",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/8f/87/f9/vista-del-rio-futaleufu.jpg?w=700&h=500&s=1",
      liked: false,
    },
    {
      id: 9,
      lugar: "lugar 10",
      provincia: "Mendoza",
      categoria: "Campo",
      descripcion: "descripción del lugar 10",
      img: "https://www.clarin.com/img/2019/11/06/a8GQ9c_x_1200x630__1.jpg",
      liked: false,
    },
    {
      id: 10,
      lugar: "lugar 11",
      provincia: "Mendoza",
      categoria: "Montaña",
      descripcion: "descripción del lugar 11",
      img: "https://www.argentinaturismo.com.ar/mendoza/img/img-pozo-de-las-animas.jpg",
      liked: false,
    },
    {
      id: 11,
      lugar: "lugar 12",
      provincia: "Bs As",
      categoria: "Llamativo",
      descripcion: "descripción del lugar 12",
      img: "https://www.passagenspromo.com.br/blog/wp-content/uploads/2020/04/turismo-em-buenos-aires-floralis-generica.jpg",
      liked: false,
    },
    {
      id: 12,
      lugar: "lugar 13",
      provincia: "La Pampa",
      categoria: "Playa",
      descripcion: "descripción del lugar 13",
      img: "https://www.cronista.com/files/image/459/459505/62700a0f1706f.jpg",
      liked: false,
    },
    {
      id: 13,
      lugar: "lugar 14",
      provincia: "La Rioja",
      categoria: "Montaña",
      descripcion: "descripción del lugar 14",
      img: "https://media.viajando.travel/p/87638b222a6a67c84c54773645664f6b/adjuntos/236/imagenes/000/470/0000470375/la-rioja-pn-talampayajpg.jpg?2022-04-04-17-03-37",
      liked: false,
    },
    {
      id: 14,
      lugar: "lugar 15",
      provincia: "Bs As",
      categoria: "Ciudad",
      descripcion: "descripción del lugar 15",
      img: "https://turismo.org/wp-content/uploads/2010/06/obelisco-760x500.jpg",
      liked: false,
    },
    {
      id: 15,
      lugar: "lugar 16",
      provincia: "Tucumán",
      categoria: "Rural",
      descripcion: "descripción del lugar 16",
      img: "https://agrolink.com.ar/wp-content/uploads/2020/11/turismo-rural-Tucum%C3%A1n.jpg",
      liked: false,
    },
  ];

  const [arrayPlaces, setArrayPlaces] = useState(content);

  const addPlace = (objectPlace) => {
    setArrayPlaces([
      ...arrayPlaces,
      {
        id: arrayPlaces.length,
        lugar: objectPlace.lugar,
        provincia: objectPlace.provincia,
        categoria: objectPlace.categoria,
        img: objectPlace.url,
        liked: false,
      },
    ]);
  };

  const deletePlace = (objectPlace) => {
    setArrayPlaces(arrayPlaces.filter((p) => p.id !== objectPlace.id));
  };

  const giveLike = (objectPlace) => {
    let arrayAux = [...arrayPlaces];
    let indexFound = arrayAux.findIndex((l) => l.id === objectPlace.id);
    if (arrayAux[indexFound].liked) {
      arrayAux[indexFound].liked = false;
    } else {
      arrayAux[indexFound].liked = true;
    }
    setArrayPlaces(arrayAux);
  };

  const [itemOffset, setItemOffset] = useState(0);
  let itemsPerPage = 12;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = arrayPlaces.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(arrayPlaces.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % arrayPlaces.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <h1 className="text-center">MIS ME GUSTA</h1>
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
              <option value="Catamarca">Catamarca</option>
              <option value="misiones">Misiones</option>
              <option value="jujuy">Jujuy</option>
              <option value="chubut">Chubut</option>
              <option value="mendoza">Mendoza</option>
              <option value="la rioja">La Rioja</option>
              <option value="la pampa">La Pampa</option>
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
              <option value="cataratas">Cataratas</option>
              <option value="llanura">Llanura</option>
              <option value="llamativo">Llamativo</option>
              <option value="campo">Campo</option>
              <option value="ciudad">Ciudad</option>
              <option value="rural">Rural</option>
            </Form.Select>
          </div>
        </div>

        <div className="row m-0">
          {currentItems && category === "" && province === ""
            ? currentItems.map((p, i) => (
                <LikeElement
                  key={p.id}
                  objeto={p}
                  catSelect={category}
                  provSelect={province}
                  deleteP={() => deletePlace(p)}
                  likeP={() => giveLike(p)}
                />
              ))
            : arrayPlaces.map((p, i) => (
                <LikeElement
                  key={p.id}
                  objeto={p}
                  catSelect={category}
                  provSelect={province}
                  deleteP={() => deletePlace(p)}
                  likeP={() => giveLike(p)}
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default LikesPage;
