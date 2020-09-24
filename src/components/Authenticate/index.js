import React, { useState } from 'react';
import Login from './Login';

function Authenticate({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  if (authenticated) return children;
  return <Login />;
}

export default Authenticate;
