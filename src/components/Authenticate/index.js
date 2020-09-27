import React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';
import LoginForm from './LoginForm';
import { login } from '../../store/actions/authentication';

function Authenticate({ children }) {
  const { token, loading, error } = useMappedState(
    ({ authentication }) => authentication,
  );
  const dispatch = useDispatch();

  function validateCredentials(credentials) {
    dispatch(login(credentials));
  }

  if (token) return children;
  if (loading) return 'loading...';

  return (
    <div>
      <LoginForm validateCredentials={validateCredentials} />
      {error}
    </div>
  );
}

export default Authenticate;
