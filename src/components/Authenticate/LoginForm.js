import React, { useState } from 'react';
import { TextInput, SimpleBtn } from '../BaseComponents';

function Login({ validateCredentials }) {
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

  return (
    <div>
      Login
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
    </div>
  );
}

export default Login;
