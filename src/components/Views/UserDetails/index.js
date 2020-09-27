import React, { useEffect } from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { NavLink } from 'react-router-dom';
import Form from './Form';
import {
  loadUser,
  updateUser,
  deleteUser,
} from '../../../store/actions/userDetails';

function UserDetails({ match }) {
  const state = useMappedState(({ userDetails }) => userDetails);
  const dispatch = useDispatch();
  const userId = +match.params.id;

  useEffect(() => {
    if (state.id !== userId) dispatch(loadUser(userId));
  }, [userId, dispatch, state]);

  if (state.loading) return 'loading...';
  return (
    <div>
      <Form
        state={state}
        clickOnUpdateBtn={(userData) => dispatch(updateUser(userData))}
        clickOnDeleteBtn={() => dispatch(deleteUser(userId))}
      />
      <NavLink to="/detalle">Volver</NavLink>
      {state.error}
    </div>
  );
}

export default UserDetails;
