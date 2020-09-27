import { call, put, takeLatest, select } from 'redux-saga/effects';
import {
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
} from '../actions/deleteUserDetails';

function* handleUserDeleteRequest() {
  try {
    const userId = yield select(getId);
    yield call(deleteUser, userId);
    yield put({ type: DELETE_USER_SUCCESS });
  } catch (e) {
    yield put({ type: DELETE_USER_ERROR });
  }
}

function getId({ deleteUserDetails }) {
  return deleteUserDetails.id;
}

async function deleteUser(id) {
  const response = await fetch('https://reqres.in/api/users/' + id, {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json' },
  });
  return await response.json();
}

export default function* watchUsersListRequest() {
  yield takeLatest(DELETE_USER, handleUserDeleteRequest);
}
