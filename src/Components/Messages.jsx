import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import FeatureElement from "./FeatureElement";
import TablePlaces from "../Components/TablePlaces";
import { Link } from "react-router-dom";
import "../Styles/featuredPage.css";

const Messages = ({ placesDb, userLDb }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("https://proyecto-3-backend.vercel.app/showContactMessage")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((error) => console.log("error: ", error));
  }, []);

  return (
    <>
      <div>
        <h1 className="text-center mt-2">MENSAJES</h1>
        <p className="mx-4 p-anchor-head-links">
          <Link to="/">Home</Link>
          <b className="mx-2">/</b>
          <Link to="/mensajes">Mensajes</Link>
        </p>
        {Object.keys(userLDb).length !== 0 && userLDb.rol === "admin" && (
          <div className="div-admin-featured">
            <h2 className="text-center title-admin-featured">Ver mensajes</h2>
            <div>
              <div className="div-table-featured">
                <Table responsive="sm" striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Email</th>
                      <th>Nombre</th>
                      <th>Mensaje</th>
                    </tr>
                  </thead>
                  <tbody>
                    {messages.length !== 0 &&
                      messages.map((m) => (
                        <tr key={m._id}>
                          <td>{m._id}</td>
                          <td
                            style={{ cursor: "pointer" }}
                            onClick={() => window.open(`mailto:${m.email}`)}
                          >
                            {m.email}
                            <p className="m-0 p-0" style={{ color: "orange" }}>
                              (Responder)
                            </p>
                          </td>
                          <td>{m.name}</td>
                          <td style={{ height: "auto" }}>{m.message}</td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Messages;
