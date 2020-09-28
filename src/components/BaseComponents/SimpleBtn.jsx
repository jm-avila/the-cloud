import React from 'react';

function SimpleBtn({ text = '', onClick }) {
  return (
    <button className="simple-btn" onClick={onClick}>
      {text}
    </button>
  );
}

export default SimpleBtn;
