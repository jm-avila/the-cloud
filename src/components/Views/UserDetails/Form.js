import React, { useState, useEffect } from 'react';
import { TextInput, SimpleBtn } from '../../BaseComponents';

function Form({ state, updateEntry = () => {}, deleteEntry = () => {} }) {
  const [formValues, setFormValues] = useState(state);

  useEffect(() => {
    setFormValues(state);
  }, [state]);

  function handleTextInputChange(field, value) {
    setFormValues((prevState) => ({ ...prevState, [field]: value }));
  }

  function handleUpdate() {
    updateEntry(formValues);
  }

  function handleDelete() {
    deleteEntry(formValues.id);
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
        value={formValues}
        text={'Actualizar'}
        onClick={handleUpdate}
      />
      <SimpleBtn value={formValues.id} text={'Borrar'} onClick={handleDelete} />
    </div>
  );
}

export default Form;
