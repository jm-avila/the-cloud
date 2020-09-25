import { call, put, takeLatest, select } from 'redux-saga/effects';
import {
  LOAD_USERS,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR,
  CHANGE_PAGE,
} from '../actions/userList';

function* handleUsersListRequest() {
  try {
    const page = yield select(getPage);
    const payload = yield call(getData, page);
    yield put({ type: LOAD_USERS_SUCCESS, payload });
  } catch (e) {
    yield put({ type: LOAD_USERS_ERROR, payload: e });
  }
}

function getPage({ userList }) {
  return userList.page;
}

async function getData(page) {
  const response = await fetch('https://reqres.in/api/users?page=' + page);
  const data = await response.json();
  return data;
}

export default function* watchUsersListRequest() {
  yield takeLatest(LOAD_USERS, handleUsersListRequest);
  yield takeLatest(CHANGE_PAGE, handleUsersListRequest);
}
