import React, { useState, useEffect } from 'react';
import { TextInput, SimpleBtn } from '../../BaseComponents';
import { NavLink } from 'react-router-dom';
import dummyData from '../data.json';

function UserDetails({ match }) {
  const userId = match.params.id;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const currentUser = dummyData.data.find(({ id }) => id == userId);
    if (currentUser) {
      const { first_name, last_name, email } = currentUser;
      setFirstName(first_name);
      setLastName(last_name);
      setEmail(email);
    }
  }, [userId]);

  function handleUpdate() {
    console.log('update');
  }

  function handleDelete() {
    console.log('delete');
  }

  return (
    <div>
      <p>User {userId} Details</p>
      <TextInput label="Nombre" value={firstName} onChange={setFirstName} />
      <TextInput label="Apellido" value={lastName} onChange={setLastName} />
      <TextInput type="email" label="Email" value={email} onChange={setEmail} />
      <SimpleBtn text={'Actualizar'} onClick={handleUpdate} />
      <SimpleBtn text={'Borrar'} onClick={handleDelete} />
      <NavLink to="/detalle">Volver</NavLink>
    </div>
  );
}

export default UserDetails;
