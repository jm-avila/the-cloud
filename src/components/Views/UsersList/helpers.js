import React from 'react';
import { NavLink } from 'react-router-dom';

export function generateRows(data) {
  return data.map(({ first_name, last_name, id }) => [
    first_name,
    last_name,
    <NavLink to={`/detalle/${id}`}>Ver</NavLink>,
  ]);
}

export function getPaginationData(currentPage, totalPages) {
  return { currentPage, totalPages };
}
