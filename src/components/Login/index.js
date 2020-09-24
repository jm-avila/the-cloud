import React, { useState } from "react";
import TextInput from "./TextInput";
import LoginBtn from "./LoginBtn";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleLoginBtnOnClick() {
    console.log({ userName, password });
  }
  return (
    <div>
      Login
      <TextInput onChange={setUserName} />
      <TextInput type="password" onChange={setPassword} />
      <LoginBtn onClick={handleLoginBtnOnClick} />
    </div>
  );
}

export default Login;
