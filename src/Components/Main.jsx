import React, { useState, useEffect } from "react";
import Hero from "../Components/Hero";
import LikesPage from "../Components/LikesPage";
import RecoverPass from "../Components/RecoverPass";
import SearchResult from "../Components/SearchResult";
import Home from "../Components/Home";
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../Styles/main.css";

const Main = () => {
  return (
    <>
      <main className="mx-auto" style={{ maxWidth: "1300px" }}>
        {/* Contenido Main
        <Hero />
        <LikesPage />
        <RecoverPass />
        <SearchResult /> */}
        <Home />
      </main>
    </>
  );
};

export default Main;
