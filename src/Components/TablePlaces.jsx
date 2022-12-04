import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

const TablePlaces = (props) => {
  let foundByCategory = false;
  let foundByProvince = false;
  let verifySearch = false;

  if (
    props.catSelect.toLowerCase() === props.object.category.toLowerCase() ||
    props.catSelect === ""
  ) {
    foundByCategory = true;
  }

  if (
    props.provSelect.toLowerCase() === props.object.province.toLowerCase() ||
    props.provSelect === ""
  ) {
    foundByProvince = true;
  }

  if (foundByCategory && foundByProvince) {
    verifySearch = true;
  }

  return (
    <>
      {verifySearch && (
        <tr>
          <td>{props.object._id}</td>
          <td style={{ width: "25rem" }}>{props.object.namePlace}</td>
          <td>{props.object.province}</td>
          <td>{props.object.category}</td>
          <td className="d-flex justify-content-center">
            {props.object.featured === true ? (
              <FontAwesomeIcon
                className="icon-color-custom"
                icon={fasStar}
                onClick={props.highlight}
              />
            ) : (
              <FontAwesomeIcon
                className="icon-color-custom"
                icon={farStar}
                onClick={props.highlight}
              />
            )}
          </td>
        </tr>
      )}
    </>
  );
};

export default TablePlaces;
