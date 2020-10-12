import React, { Fragment } from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { LoginForm } from '../Views';
import { login, logout } from '../../store/actions/authentication';
import { SimpleBtn } from '../BaseComponents';

function Authenticate({ children }) {
  const { token, loading, error } = useMappedState(
    ({ authentication }) => authentication,
  );
  const dispatch = useDispatch();

  if (token)
    return (
      <Fragment>
        <SimpleBtn
          text="Logout"
          className="logout-btn"
          onClick={() => dispatch(logout())}
        />
        {children}
      </Fragment>
    );

  return (
    <LoginForm
      loading={loading}
      error={error}
      dispatchLogin={(val) => dispatch(login(val))}
    />
  );
}

export default Authenticate;
