import React, { Fragment, useEffect } from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { NavLink } from 'react-router-dom';
import {
  loadUser,
  updateUser,
  deleteUser,
} from '../../../store/actions/userDetails';
import { ViewTitle, ErrorMessage } from '../../BaseComponents';
import Form from './Form';

function UserDetails({ match }) {
  const state = useMappedState(({ userDetails }) => userDetails);
  const dispatch = useDispatch();
  const userId = +match.params.id;

  useEffect(() => {
    if (state.id !== userId) dispatch(loadUser(userId));
  }, [userId, dispatch, state]);

  if (state.loading) return 'loading...';

  return (
    <Fragment>
      <ViewTitle text={`Detalles de ${state.first_name} ${state.last_name}`} />
      <Form
        state={state}
        clickOnUpdateBtn={(userData) => dispatch(updateUser(userData))}
        clickOnDeleteBtn={() => dispatch(deleteUser(userId))}
      />
      <NavLink to="/detalle">Volver</NavLink>
      <ErrorMessage text={state.error} />
    </Fragment>
  );
}

export default UserDetails;
