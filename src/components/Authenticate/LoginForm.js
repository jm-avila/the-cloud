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
      <h1>Iniciar sesión con tu Email</h1>
      <TextInput
        label="Correo electrónico"
        onChange={(val) => handleOnChange('email', val)}
      />
      <TextInput
        type="password"
        label="Contraseña"
        onChange={(val) => handleOnChange('password', val)}
      />
      <SimpleBtn text="Iniciar sesión" onClick={handleLoginBtnOnClick} />
      {error}
    </Fragment>
  );
}

export default Login;
