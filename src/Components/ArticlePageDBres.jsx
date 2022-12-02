import React, { useState, useEffect } from "react";
import ArticlePageDb from "./ArticlePageDb";
import { useParams } from "react-router-dom";

const ArticlePageDBres = (props) => {
  const paramsId = useParams();

  const [objectPlace, setObjectPlace] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/consultPlace/${paramsId.id}`)
      .then((res) => res.json())
      .then((json) => setObjectPlace(json));
  }, []);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (objectPlace !== null) {
      setImages([
        {
          original: objectPlace.img.img1,
          thumbnail: objectPlace.img.img1,
        },
        {
          original: objectPlace.img.img2,
          thumbnail: objectPlace.img.img2,
        },
        {
          original: objectPlace.img.img3,
          thumbnail: objectPlace.img.img3,
        },
        {
          original: objectPlace.img.img4,
          thumbnail: objectPlace.img.img4,
        },
        {
          original: objectPlace.img.img5,
          thumbnail: objectPlace.img.img5,
        },
      ]);
    }
  }, [objectPlace]);

  return <>{<ArticlePageDb objectPlace={objectPlace} images={images} />}</>;
};

export default ArticlePageDBres;
