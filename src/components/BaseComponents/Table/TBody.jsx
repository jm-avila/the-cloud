import React from "react";

function TBody({ rows }) {
  return (
    <tbody>
      {rows.map((data, i) => (
        <tr key={i}>
          {data.map((values, j) => (
            <td key={j}>{values}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TBody;
