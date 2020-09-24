import React from "react";

function THead({ columns }) {
  return (
    <thead>
      <tr>
        {columns.map(({ name }, i) => (
          <th key={i}>{name}</th>
        ))}
      </tr>
    </thead>
  );
}

export default THead;
