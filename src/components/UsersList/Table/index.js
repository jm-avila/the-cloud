import React from "react";
import THead from "./THead";
import TBody from "./TBody";

function Table({ columns, rows }) {
  return (
    <table>
      <THead columns={columns} />
      <TBody rows={rows} />
    </table>
  );
}

export default Table;
