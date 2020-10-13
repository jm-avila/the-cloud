import React, { Fragment } from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { useHistory } from 'react-router-dom';
import { LoginForm } from '../Views';
import { login, logout } from '../../store/actions/authentication';
import { SimpleBtn } from '../BaseComponents';

function Authenticate({ children }) {
  const { token, loading, error } = useMappedState(
    ({ authentication }) => authentication,
  );
  const dispatch = useDispatch();
  const history = useHistory();

  function handleLogout() {
    dispatch(logout());
    history.push('/');
  }

  function handleLogin(val) {
    dispatch(login(val));
  }

  if (token)
    return (
      <Fragment>
        <SimpleBtn
          text="Logout"
          className="logout-btn"
          onClick={handleLogout}
        />
        {children}
      </Fragment>
    );

  return (
    <LoginForm loading={loading} error={error} dispatchLogin={handleLogin} />
  );
}

export default Authenticate;
