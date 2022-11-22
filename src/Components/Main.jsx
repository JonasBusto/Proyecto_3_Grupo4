import React from "react";
import LikesPage from "../Components/LikesPage";
import RecoverPass from "../Components/RecoverPass";
import SearchResult from "../Components/SearchResult";
import PlacesGrid from "../Components/PlacesGrid";
import Home from "../Components/Home";
import Error404 from "./Error404";
import { Routes, Route } from "react-router-dom";
import "../Styles/main.css";
import ArticlePage from "./ArticlePage";
import FeaturedPage from "./FeaturedPage";
import Login from "./Login";

const Main = () => {
  return (
    <>
      <main className="mx-auto" style={{ maxWidth: "1300px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lugar" element={<ArticlePage />} />
          <Route path="/lugares" element={<PlacesGrid />} />
          <Route path="/recuperarContrasela" element={<RecoverPass />} />
          <Route path="/likePagina" element={<LikesPage />} />
          <Route path="/busqueda" element={<SearchResult />} />
          <Route path="/destacados" element={<FeaturedPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
    </>
  );
};

export default Main;
