import { call, put, takeLatest } from 'redux-saga/effects';
import {
  LOAD_USERS,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR,
} from '../actions/userList';

function* handleUsersListRequest() {
  try {
    const payload = yield call(getData);
    yield put({ type: LOAD_USERS_SUCCESS, payload });
  } catch (e) {
    yield put({ type: LOAD_USERS_ERROR, payload: e });
  }
}

async function getData() {
  const response = await fetch('https://reqres.in/api/users');
  const data = await response.json();
  return data;
}

export default function* watchUsersListRequest() {
  yield takeLatest(LOAD_USERS, handleUsersListRequest);
}
