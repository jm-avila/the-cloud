import React, { Fragment, useState } from 'react';
import {
  ViewTitle,
  TextInput,
  SimpleBtn,
  ErrorMessage,
  LoadingSpinner,
} from '../../BaseComponents';

function Login({ loading, error, dispatchLogin }) {
  const [credentials, setCredentials] = useState({
    email: null,
    password: null,
  });

  function handleOnChange(field, value) {
    setCredentials((prevState) => ({ ...prevState, [field]: value }));
  }
  function handleLoginBtnOnClick() {
    dispatchLogin(credentials);
  }

  if (loading) return <LoadingSpinner />;

  return (
    <Fragment>
      <ViewTitle text="Login with Email" />
      <TextInput
        label="Email"
        onChange={(val) => handleOnChange('email', val)}
      />
      <TextInput
        type="password"
        label="Password"
        onChange={(val) => handleOnChange('password', val)}
      />
      <SimpleBtn text="Login" onClick={handleLoginBtnOnClick} />
      <ErrorMessage text={error} />
    </Fragment>
  );
}

export default Login;
