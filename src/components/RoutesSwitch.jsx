import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import UsersList from "./UsersList";
import UserDetails from "./UserDetails";

function RoutesSwitch() {
  return (
    <div>
      <Switch>
        <Route exact path="/users-list" component={UsersList} />
        <Route exact path="/user-details" component={UserDetails} />
        <Redirect exact to="/" />
      </Switch>
    </div>
  );
}

export default RoutesSwitch;
