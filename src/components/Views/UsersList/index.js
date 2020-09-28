import React, { Fragment, useEffect } from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';
import Table from '../../BaseComponents/Table';
import { getPaginationData, generateRows } from './helpers';
import { loadUsers, changePage } from '../../../store/actions/userList';

function UsersList() {
  const state = useMappedState(({ userList }) => userList);
  const dispatch = useDispatch();

  const columns = ['Nombre', 'Apellido', 'Detalles'];
  const rows = generateRows(state.data);
  const pagination = getPaginationData(state.page, state.total_pages);

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  function onPageChange(newPage) {
    dispatch(changePage(newPage));
  }

  if (state.loading) return 'loading...';

  return (
    <Fragment>
      <Table
        columns={columns}
        rows={rows}
        pagination={pagination}
        pageChange={onPageChange}
      />
      {state.error}
    </Fragment>
  );
}

export default UsersList;
