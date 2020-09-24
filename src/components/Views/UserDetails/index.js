import React from "react";
import dummyData from "../data.json";

function UserDetails({ match }) {
  const userId = match.params.id;
  return <div>User {userId} Details</div>;
}

export default UserDetails;
