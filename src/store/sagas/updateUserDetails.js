import { call, put, takeLatest, select } from 'redux-saga/effects';
import {
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
} from '../actions/updateUserDetails';

function* handleUserUpdateRequest() {
  try {
    const { id, data } = yield select(getUser);
    yield call(updateUser, id, data);
    yield put({ type: UPDATE_USER_SUCCESS });
  } catch (e) {
    yield put({ type: UPDATE_USER_ERROR });
  }
}

function getUser({ updateUserDetails }) {
  const { id, email, first_name, last_name } = updateUserDetails;
  return { id, data: { email, first_name, last_name } };
}

async function updateUser(id, user) {
  const response = await fetch('https://reqres.in/api/users/' + id, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(user),
  });
  return await response.json();
}

export default function* watchUsersListRequest() {
  yield takeLatest(UPDATE_USER, handleUserUpdateRequest);
}
