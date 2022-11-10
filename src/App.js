import React from 'react'
import Header from "./Components/Header";
import Main from "./Components/Main"
import Footer from './Components/Footer';
import NavContent from './Components/NavContent';
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, } from '@fortawesome/free-solid-svg-icons'
import { FaBeer } from 'react-icons/fa';
import "./Styles/app.css"

const App = () => {
  return (
    <>
      <h3>Probando icono de "React Iconos": <FaBeer /></h3>
      <h3>Probando icono de "FontAwesome": <FontAwesomeIcon icon={faEye} /></h3>
      <Header />
      <NavContent />
      <Main />
      <Footer />
    </>
  )
}

export default App