import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/users-list">
        Users List
      </NavLink>
      <NavLink exact to="/user-details">
        User Details
      </NavLink>
    </nav>
  );
}

export default Navigation;
