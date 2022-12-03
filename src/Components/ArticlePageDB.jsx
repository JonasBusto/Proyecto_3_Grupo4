import React, { useState, useEffect } from "react";
import ArticlePage from "./ArticlePage";
import { useParams } from "react-router-dom";

const ArticlePageDB = ({ userLDb }) => {
  const paramsId = useParams();

  const [objectPlace, setObjectPlace] = useState(null);

  useEffect(() => {
    fetch(`https://proyecto-3-backend.vercel.app/consultPlace/${paramsId.id}`)
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

  return (
    <>
      {
        <ArticlePage
          objectPlace={objectPlace}
          images={images}
          userLDb={userLDb}
        />
      }
    </>
  );
};

export default ArticlePageDB;
