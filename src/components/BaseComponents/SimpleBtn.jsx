import React from 'react';

function LoginBtn({ text = '', onClick }) {
  return <button onClick={onClick}>{text}</button>;
}

export default LoginBtn;
