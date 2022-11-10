import React, { useState, useEffect } from "react";
import Hero from "../Components/Hero";
import LikesPage from "../Components/LikesPage";
import RecoverPass from "../Components/RecoverPass";
import SearchResult from "../Components/SearchResult";
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../Styles/main.css";

// ACÁ IRAN TODO EL CONTENIDO O TODOS LOS COMPONENTES DE PAGINA
// EXCEPTO EL COMPONENTE DE NAV, HEADER Y FOOTER
const Main = () => {
  return (
    <>
      <div
        style={{ border: "1px black solid", width: "80%", marginTop: "1rem" }}
      >
        Contenido Main
        <Hero />
        <LikesPage />
        <RecoverPass />
        <SearchResult />
      </div>
    </>
  );
};

export default Main;
