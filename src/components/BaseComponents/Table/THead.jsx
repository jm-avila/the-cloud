import React from 'react';

function THead({ columns }) {
  return (
    <thead>
      <tr>
        {columns.map((title, i) => (
          <th key={i}>{title}</th>
        ))}
      </tr>
    </thead>
  );
}

export default THead;
