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
import Contact from "./Contact";

const Main = () => {
  return (
    <>
      <main className="mx-auto w-100" style={{ maxWidth: "1300px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lugar/:id" element={<ArticlePage />} />
          <Route path="/lugares/:province/:category" element={<PlacesGrid />} />
          <Route path="/recuperarContraseña" element={<RecoverPass />} />
          <Route path="/likes" element={<LikesPage />} />
          <Route path="/search=:resultado" element={<SearchResult />} />
          <Route path="/destacados" element={<FeaturedPage />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
    </>
  );
};

export default Main;
