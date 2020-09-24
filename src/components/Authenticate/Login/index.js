import React, { useState } from 'react';
import { TextInput, SimpleBtn } from '../../BaseComponents';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function handleLoginBtnOnClick() {
    console.log({ userName, password });
  }
  return (
    <div>
      Login
      <TextInput label="Usuario" onChange={setUserName} />
      <TextInput type="password" label="Contraseña" onChange={setPassword} />
      <SimpleBtn text="Login" onClick={handleLoginBtnOnClick} />
    </div>
  );
}

export default Login;
