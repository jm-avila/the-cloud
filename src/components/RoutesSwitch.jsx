import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

function RoutesSwitch() {
  return (
    <div>
      <Switch>
        <Redirect exact to="/" />
      </Switch>
    </div>
  );
}

export default RoutesSwitch;
