import React, { useState, useEffect } from 'react';
import { TextInput, SimpleBtn } from '../../BaseComponents';

function Form({
  state,
  clickOnUpdateBtn = () => {},
  clickOnDeleteBtn = () => {},
}) {
  const [formValues, setFormValues] = useState(state);

  useEffect(() => {
    setFormValues(getInitialFormValues(state));
  }, [state]);

  function getInitialFormValues({ id, email, first_name, last_name }) {
    return { id, email, first_name, last_name };
  }

  function handleTextInputChange(field, value) {
    setFormValues((prevState) => ({ ...prevState, [field]: value }));
  }

  return (
    <div>
      <TextInput
        label="Nombre"
        value={formValues.first_name}
        onChange={(val) => handleTextInputChange('first_name', val)}
      />
      <TextInput
        label="Apellido"
        value={formValues.last_name}
        onChange={(val) => handleTextInputChange('last_name', val)}
      />
      <TextInput
        type="email"
        label="Email"
        value={formValues.email}
        onChange={(val) => handleTextInputChange('email', val)}
      />
      <SimpleBtn
        text={'Actualizar'}
        onClick={() => clickOnUpdateBtn(formValues)}
      />
      <SimpleBtn text={'Borrar'} onClick={() => clickOnDeleteBtn()} />
    </div>
  );
}

export default Form;
