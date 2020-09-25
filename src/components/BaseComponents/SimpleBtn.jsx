import React from 'react';

function SimpleBtn({ text = '', onClick }) {
  return <button onClick={onClick}>{text}</button>;
}

export default SimpleBtn;
