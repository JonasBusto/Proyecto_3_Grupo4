import React, { useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import NavContent from "./Components/NavContent";
import "./Styles/app.css";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header search={search} setSearch={setSearch} />
      <NavContent sticky="top" search={search} setSearch={setSearch} />
      <Main />
      <Footer search={search} setSearch={setSearch} />
    </div>
  );
};

export default App;
