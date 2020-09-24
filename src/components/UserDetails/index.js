import React from "react";

function UserDetails({ match }) {
  const userId = match.params.id;
  return <div>User {userId} Details</div>;
}

export default UserDetails;
