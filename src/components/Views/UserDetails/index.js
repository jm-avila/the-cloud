import React, { useState, useEffect } from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { NavLink } from 'react-router-dom';
import { TextInput, SimpleBtn } from '../../BaseComponents';
import { loadUser } from '../../../store/actions/userDetails';

function UserDetails({ match }) {
  const state = useMappedState(({ userDetails }) => userDetails);
  const dispatch = useDispatch();
  const userId = +match.params.id;

  const [formValues, setFormValues] = useState(state);

  useEffect(() => {
    if (state.id !== userId) dispatch(loadUser(userId));
    setFormValues(state);
  }, [state]);

  function handleUpdate() {
    console.log(formValues);
  }

  function handleDelete() {
    console.log('delete', state.id);
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
        value={formValues}
        text={'Actualizar'}
        onClick={handleUpdate}
      />
      <SimpleBtn value={formValues.id} text={'Borrar'} onClick={handleDelete} />
      <NavLink to="/detalle">Volver</NavLink>
    </div>
  );
}

export default UserDetails;
