import React, { Fragment, useState } from 'react';
import { TextInput, SimpleBtn } from '../BaseComponents';

function Login({ loading, error, validateCredentials }) {
  const [credentials, setCredentials] = useState({
    email: null,
    password: null,
  });

  function handleOnChange(field, value) {
    setCredentials((prevState) => ({ ...prevState, [field]: value }));
  }
  function handleLoginBtnOnClick() {
    validateCredentials(credentials);
  }

  if (loading) return 'loading...';

  return (
    <Fragment>
      <h1>Login</h1>
      <TextInput
        label="Usuario"
        onChange={(val) => handleOnChange('email', val)}
      />
      <TextInput
        type="password"
        label="Contraseña"
        onChange={(val) => handleOnChange('password', val)}
      />
      <SimpleBtn text="Login" onClick={handleLoginBtnOnClick} />
      {error}
    </Fragment>
  );
}

export default Login;
