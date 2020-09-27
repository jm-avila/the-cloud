import { call, put, takeLatest, select } from 'redux-saga/effects';
import {
  LOAD_USER,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
} from '../actions/userDetails';

function getUserDetails({ userDetails }) {
  const { id, email, first_name, last_name } = userDetails;
  return { id, data: { email, first_name, last_name } };
}

function* handleUserByIdRequest() {
  try {
    const { id } = yield select(getUserDetails);
    const payload = yield call(getData, id);
    yield put({ type: LOAD_USER_SUCCESS, payload });
  } catch (e) {
    yield put({ type: LOAD_USER_ERROR, payload: e });
  }
}

async function getData(id) {
  const response = await fetch('https://reqres.in/api/users/' + id);
  const { data } = await response.json();
  return data;
}

function* handleUserUpdateRequest() {
  try {
    const { id, data } = yield select(getUserDetails);
    yield call(updateUser, id, data);
    yield put({ type: UPDATE_USER_SUCCESS });
  } catch (e) {
    yield put({ type: UPDATE_USER_ERROR });
  }
}

async function updateUser(id, user) {
  const response = await fetch('https://reqres.in/api/users/' + id, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(user),
  });
  return await response.json();
}

function* handleUserDeleteRequest() {
  try {
    const { id } = yield select(getUserDetails);
    yield call(deleteUser, id);
    yield put({ type: DELETE_USER_SUCCESS });
  } catch (e) {
    yield put({ type: DELETE_USER_ERROR });
  }
}

async function deleteUser(id) {
  await fetch('https://reqres.in/api/users/' + id, {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json' },
  });
}

export default function* watchUsersListRequest() {
  yield takeLatest(LOAD_USER, handleUserByIdRequest);
  yield takeLatest(UPDATE_USER, handleUserUpdateRequest);
  yield takeLatest(DELETE_USER, handleUserDeleteRequest);
}
