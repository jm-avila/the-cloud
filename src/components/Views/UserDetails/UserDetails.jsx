import React, { Fragment, useEffect } from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { NavLink } from 'react-router-dom';
import {
  loadUser,
  updateUser,
  deleteUser,
} from '../../../store/actions/userDetails';
import {
  ViewTitle,
  ErrorMessage,
  LoadingSpinner,
  TabTitle,
} from '../../BaseComponents';
import Form from './Form';

function UserDetails({ match }) {
  const state = useMappedState(({ userDetails }) => userDetails);
  const dispatch = useDispatch();
  const userId = +match.params.id;

  useEffect(() => {
    if (state.id !== userId) dispatch(loadUser(userId));
  }, [userId, dispatch, state]);

  const viewTitle = `User Details`;

  if (state.loading) return <LoadingSpinner />;

  return (
    <Fragment>
      <TabTitle tabSubTitle={viewTitle} />
      <ViewTitle text={viewTitle} />
      <Form
        state={state}
        clickOnUpdateBtn={(userData) => dispatch(updateUser(userData))}
        clickOnDeleteBtn={() => dispatch(deleteUser(userId))}
      />
      <NavLink to="/details">Go Back</NavLink>
      <ErrorMessage text={state.error} />
    </Fragment>
  );
}

export default UserDetails;
