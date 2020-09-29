import React from 'react';

function SimpleBtn({ text = '', onClick, className = 'simple-btn' }) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}

export default SimpleBtn;
