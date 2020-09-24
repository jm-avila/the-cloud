import React, { useState, useEffect } from 'react';

function TextInput({ value = '', onChange, type = 'text' }) {
  const [innerValue, setInnerValue] = useState(value);

  useEffect(() => {
    setInnerValue(value);
  }, [value]);

  function handleOnChange(e) {
    const newValue = e.target.value;
    setInnerValue(newValue);
    onChange(newValue);
  }

  return <input value={innerValue} type={type} onChange={handleOnChange} />;
}

export default TextInput;
