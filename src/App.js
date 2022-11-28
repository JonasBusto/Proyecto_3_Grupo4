import React, { useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import NavContent from "./Components/NavContent";
import "./Styles/app.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("Autenticado"))
  );
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("Usuarios")) || []
  );
  return (
    <div className="d-flex flex-column min-vh-100 div-app">
      <Header search={search} setSearch={setSearch} />
      <NavContent
        sticky="top"
        authUser={authUser}
        setAuthUser={setAuthUser}
        search={search}
        setSearch={setSearch}
        users={users}
        setUsers={setUsers}
      />
      <Main authUser={authUser} setAuthUser={setAuthUser} />
      <Footer search={search} setSearch={setSearch} />
    </div>
  );
};

export default App;
