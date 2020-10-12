import React, { Fragment, useEffect } from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { loadUsers, changePage } from '../../../store/actions/userList';
import {
  ViewTitle,
  Table,
  ErrorMessage,
  LoadingSpinner,
} from '../../BaseComponents';
import { getPaginationData, generateRows } from './helpers';

function UsersList() {
  const state = useMappedState(({ userList }) => userList);
  const dispatch = useDispatch();

  const columns = ['First Name', 'Last Name', 'Details'];
  const rows = generateRows(state.data);
  const pagination = getPaginationData(state.page, state.total_pages);

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  function onPageChange(newPage) {
    dispatch(changePage(newPage));
  }

  if (state.loading) return <LoadingSpinner />;

  return (
    <Fragment>
      <ViewTitle text="Users List" />
      <Table
        columns={columns}
        rows={rows}
        pagination={pagination}
        pageChange={onPageChange}
      />
      <ErrorMessage text={state.error} />
    </Fragment>
  );
}

export default UsersList;
