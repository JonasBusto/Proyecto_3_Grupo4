import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import NavContent from "./Components/NavContent";
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FaBeer } from "react-icons/fa";
import "./Styles/app.css";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <NavContent sticky="top" />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
