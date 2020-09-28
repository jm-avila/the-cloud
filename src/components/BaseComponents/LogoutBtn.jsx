import React from 'react';

function LogoutBtn({ onClick = () => {} }) {
  return (
    <button className="logout-btn" onClick={onClick}>
      logout
    </button>
  );
}

export default LogoutBtn;
