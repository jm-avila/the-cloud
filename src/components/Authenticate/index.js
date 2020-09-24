import React, { useState } from "react";
import Login from "../Login";

function Authenticate({ children }) {
  const [authenticated, setAuthenticated] = useState(true);
  if (authenticated) return children;
  return <Login />;
}

export default Authenticate;
