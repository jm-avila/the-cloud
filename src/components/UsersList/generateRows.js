import React from "react";
import { NavLink } from "react-router-dom";

function generateRows(data) {
  return data.map(({ first_name, last_name, id }) => [
    first_name,
    last_name,
    <NavLink to={`/user-details/${id}`}>Ver</NavLink>,
  ]);
}

export default generateRows;
