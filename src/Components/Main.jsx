import React, { useState, useEffect } from "react";
import Hero from "../Components/Hero";
import LikesPage from "../Components/LikesPage";
import RecoverPass from "../Components/RecoverPass";
import SearchResult from "../Components/SearchResult";
import PlacesGrid from "../Components/PlacesGrid";
import Home from "../Components/Home";
import NavContent from "./NavContent";
import Error404 from "./Error404";
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../Styles/main.css";
import ArticlePage from "./ArticlePage";
import FeaturedPage from "./FeaturedPage";

const Main = () => {
  return (
    <>
      <main className="mx-auto" style={{ maxWidth: "1300px" }}>
        {/* Contenido Main
        <Hero />
        <LikesPage />
        <RecoverPass />
        <SearchResult /> */}
        {/* <Home /> */}
        {/* <Error404 /> */}
        {/* <PlacesGrid /> */}
        {/* <ArticlePage /> */}
        <FeaturedPage />
      </main>
    </>
  );
};

export default Main;
