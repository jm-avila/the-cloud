import React from "react";

function TextInput({ onChange, type = "text" }) {
  function handleOnChange(e) {
    onChange(e.target.value);
  }
  return <input type={type} onChange={handleOnChange} />;
}

export default TextInput;
