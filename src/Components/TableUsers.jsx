import React from "react";

const TableUsers = (props) => {
  return (
    <>
      <tr>
        <td>{props.object._id}</td>
        <td>{props.object.name}</td>
        <td>{props.object.lastName}</td>
        <td>{props.object.email}</td>
        <td>{props.object.token}</td>
      </tr>
    </>
  );
};

export default TableUsers;
