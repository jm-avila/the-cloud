import React, { useEffect } from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';
import Table from '../../BaseComponents/Table';
import generateRows from './generateRows';

// pages query => ?page=2
function UsersList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'LOAD_USERS' });
  }, []);

  const columns = ['Nombre', 'Apellido', 'Detalles'];
  const { data } = useMappedState(({ userList }) => userList);
  const rows = generateRows(data);

  return (
    <div>
      <Table columns={columns} rows={rows} />
    </div>
  );
}

export default UsersList;
