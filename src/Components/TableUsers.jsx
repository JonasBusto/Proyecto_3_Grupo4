import React from "react";

const TableUsers = (props) => {
  return (
    <>
      <tr>
        <td>{props.object._id}</td>
        <td>{props.object.name}</td>
        <td>{props.object.lastName}</td>
        <td>{props.object.email}</td>
      </tr>
    </>
  );
};

export default TableUsers;
