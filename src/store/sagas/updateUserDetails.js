import { call, put, takeLatest, select } from 'redux-saga/effects';
import { UPDATE_USER } from '../actions/updateUserDetails';
import { LOAD_USER_SUCCESS, LOAD_USER_ERROR } from '../actions/userDetails';

function* handleUserUpdateRequest() {
  try {
    const user = yield select(getUser);
    const payload = yield call(updateUser, user.id, user);
    yield put({ type: LOAD_USER_SUCCESS, payload });
  } catch (e) {
    yield put({ type: LOAD_USER_ERROR, payload: e });
  }
}

function getUser({ updateUserDetails }) {
  return updateUserDetails;
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
