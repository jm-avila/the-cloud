import React from 'react';

function ErrorMessage({ text = '' }) {
  if (!text) return null;

  return <p className="error-message">{text}</p>;
}

export default ErrorMessage;
