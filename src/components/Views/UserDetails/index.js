import React, { useEffect } from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { NavLink } from 'react-router-dom';
import Form from './Form';
import { loadUser } from '../../../store/actions/userDetails';
import { updateUser } from '../../../store/actions/updateUserDetails';
import { deleteUser } from '../../../store/actions/deleteUserDetails';

function UserDetails({ match }) {
  const state = useMappedState(({ userDetails }) => userDetails);
  const dispatch = useDispatch();
  const userId = +match.params.id;

  useEffect(() => {
    if (state.id !== userId) dispatch(loadUser(userId));
  }, [userId, dispatch, state]);

  return (
    <div>
      <Form
        state={state}
        clickOnUpdateBtn={(userData) => dispatch(updateUser(userData))}
        clickOnDeleteBtn={() => dispatch(deleteUser(userId))}
      />
      <NavLink to="/detalle">Volver</NavLink>
    </div>
  );
}

export default UserDetails;
