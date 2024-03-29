import React from "react";
import LikesPage from "../Components/LikesPage";
import RecoverPass from "../Components/RecoverPass";
import SearchResult from "../Components/SearchResult";
import PlacesGrid from "../Components/PlacesGrid";
import Home from "../Components/Home";
import Error404 from "./Error404";
import { Routes, Route } from "react-router-dom";
import "../Styles/main.css";
import ArticlePageDB from "./ArticlePageDB";
import FeaturedPage from "./FeaturedPage";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import UserProfile from "./UserProfile";
import UserList from "./UserList";
import Messages from "./Messages";

const Main = ({ placesDb, userLDb, setUserLDb }) => {
  return (
    <>
      <main className="mx-auto w-100" style={{ maxWidth: "1300px" }}>
        <Routes>
          <Route
            path="/"
            element={<Home placesDb={placesDb} userLDb={userLDb} />}
          />
          <Route
            path="/lugar/:id"
            element={<ArticlePageDB placesDb={placesDb} userLDb={userLDb} />}
          />
          <Route
            path="/lugares/:province/:category"
            element={<PlacesGrid userLDb={userLDb} placesDb={placesDb} />}
          />
          <Route path="/recuperarContraseña" element={<RecoverPass />} />
          <Route path="/likes" element={<LikesPage />} />
          <Route
            path="/search=:resultado"
            element={<SearchResult placesDb={placesDb} />}
          />
          <Route
            path="/destacados"
            element={<FeaturedPage placesDb={placesDb} userLDb={userLDb} />}
          />
          <Route
            path="/mensajes"
            element={<Messages placesDb={placesDb} userLDb={userLDb} />}
          />
          <Route
            path="/usuariosLista"
            element={<UserList userLDb={userLDb} />}
          />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/nosotros" element={<AboutUs />} />
          <Route
            path="/usuario"
            element={<UserProfile userLDb={userLDb} setUserLDb={setUserLDb} />}
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
    </>
  );
};

export default Main;
