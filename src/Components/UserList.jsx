import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import TableUsers from "./TableUsers";
import { Link } from "react-router-dom";
import "../Styles/featuredPage.css";

const UserList = ({ placesDb, userLDb }) => {
  const [usersDb, setUsersDb] = useState([]);

  useEffect(() => {
    fetch("https://proyecto-3-backend.vercel.app/consultUsers")
      .then((res) => res.json())
      .then((data) => setUsersDb(data));
  }, []);

  return (
    <>
      <div>
        <h1 className="text-center mt-2">USUARIOS</h1>
        <p className="mx-4 p-anchor-head-links">
          <Link to="/">Home</Link>
          <b className="mx-2">/</b>
          <Link to="/usuariosLista">Usuarios</Link>
        </p>
        {Object.keys(userLDb).length !== 0 && userLDb.rol === "admin" ? (
          <div className="div-admin-featured">
            <h2 className="text-center title-admin-featured">
              Ver usuarios del sistema
            </h2>
            <div>
              <div className="div-table-featured">
                <Table responsive="sm" striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th style={{ width: "25rem" }}>Nombre</th>
                      <th>Apellido</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersDb.length !== 0 &&
                      usersDb.map((p) => <TableUsers key={p._id} object={p} />)}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        ) : (
          <h1>Buen intento, pero no eres el Administrador</h1>
        )}
      </div>
    </>
  );
};

export default UserList;
