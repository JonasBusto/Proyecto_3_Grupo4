import React from "react";
import "../Styles/error404.css";
import { Container } from "react-bootstrap";
const Error404 = () => {
  return (
    <>
      <div>
        <Container fluid className="error404">
          <img class="img-fluid" src="/error404.jpeg" alt="" />
        </Container>
      </div>
    </>
  );
};

export default Error404;