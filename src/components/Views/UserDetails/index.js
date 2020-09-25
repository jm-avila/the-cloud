import React, { useState, useEffect } from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { NavLink } from 'react-router-dom';
import Form from './Form';
import { loadUser } from '../../../store/actions/userDetails';

function UserDetails({ match }) {
  const state = useMappedState(({ userDetails }) => userDetails);
  const dispatch = useDispatch();
  const userId = +match.params.id;

  useEffect(() => {
    if (state.id !== userId) dispatch(loadUser(userId));
  }, [state]);

  return (
    <div>
      <Form state={state} updateEntry={console.log} deleteEntry={console.log} />
      <NavLink to="/detalle">Volver</NavLink>
    </div>
  );
}

export default UserDetails;
