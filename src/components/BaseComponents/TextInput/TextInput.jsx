import React, { useState, useEffect } from 'react';

function TextInput({ label, value = '', onChange, type = 'text' }) {
  const [innerValue, setInnerValue] = useState(value || '');

  useEffect(() => {
    setInnerValue(value || '');
  }, [value]);

  function handleOnChange(e) {
    const newValue = e.target.value;
    setInnerValue(newValue);
    onChange(newValue);
  }

  return (
    <div className="text-input" data-testid="text-input">
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        value={innerValue}
        type={type}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default TextInput;
