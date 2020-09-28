import React, { Fragment } from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';
import LoginForm from './LoginForm';
import { login } from '../../store/actions/authentication';
import { LogoutBtn } from '../BaseComponents';

function Authenticate({ children }) {
  const { token, loading, error } = useMappedState(
    ({ authentication }) => authentication,
  );
  const dispatch = useDispatch();

  function validateCredentials(credentials) {
    dispatch(login(credentials));
  }

  function dispatchLogout() {}

  if (true || token)
    return (
      <Fragment>
        <LogoutBtn onClick={dispatchLogout} />
        {children}
      </Fragment>
    );

  return (
    <LoginForm
      loading={loading}
      error={error}
      validateCredentials={validateCredentials}
    />
  );
}

export default Authenticate;
