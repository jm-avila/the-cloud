import React from 'react';

function LoadingSpinner() {
  return (
    <div className="sk-chase" data-testid="spinner-container">
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
    </div>
  );
}

export default LoadingSpinner;
