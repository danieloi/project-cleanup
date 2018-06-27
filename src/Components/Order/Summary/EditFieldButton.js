import React from "react";
import { Link } from "react-router-dom";

export const EditFieldButton = ({ values }) => {
  return (
    <Link to={values}>
      <i className="material-icons grey">edit</i>
      Edit this field
    </Link>
  );
};
