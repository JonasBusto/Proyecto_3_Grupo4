import React from 'react'
import Header from "./Components/Header";
import Main from "./Components/Main"
import Footer from './Components/Footer';
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App