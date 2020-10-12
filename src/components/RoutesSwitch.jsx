import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { UsersList, UserDetails } from './Views';

function RoutesSwitch() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={UsersList} />
        <Route path="/details/:id" component={UserDetails} />
        <Redirect exact to="/" />
      </Switch>
    </div>
  );
}

export default RoutesSwitch;
