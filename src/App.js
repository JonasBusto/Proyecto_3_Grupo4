import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import NavContent from "./Components/NavContent";
import "./Styles/app.css";

const App = () => {
  const [search, setSearch] = useState("");
  const lstg = localStorage.getItem("token");
  const [userLDb, setUserLDb] = useState({});
  const [placesDb, setPlacesDb] = useState([]);

  useEffect(() => {
    fetch("https://proyecto-3-backend.vercel.app/userLog", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: JSON.parse(lstg),
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        setUserLDb(json);
      });
  }, []);

  useEffect(() => {
    fetch("https://proyecto-3-backend.vercel.app/consultPlace")
      .then((res) => res.json())
      .then((json) => setPlacesDb(json));
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100 div-app">
      <Header search={search} setSearch={setSearch} />
      <NavContent
        sticky="top"
        search={search}
        setSearch={setSearch}
        userLDb={userLDb}
        setUserLDb={setUserLDb}
      />
      <Main placesDb={placesDb} userLDb={userLDb} setUserLDb={setUserLDb} />
      <Footer search={search} setSearch={setSearch} />
    </div>
  );
};

export default App;
