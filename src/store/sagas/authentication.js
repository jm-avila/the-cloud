import { call, put, takeLatest, select } from 'redux-saga/effects';
import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/authentication';

function* handleCredentialsPost() {
  try {
    const credentials = yield select(getCredentials);
    const payload = yield call(postCredentials, credentials);
    yield put({ type: LOGIN_SUCCESS, payload });
  } catch (e) {
    yield put({ type: LOGIN_ERROR, payload: e });
  }
}

function getCredentials({ authentication }) {
  return authentication;
}

async function postCredentials(credentials) {
  const response = await fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  const { token, error } = await response.json();
  if (token) return token;
  else throw error;
}

export default function* watchUsersListRequest() {
  yield takeLatest(LOGIN, handleCredentialsPost);
}
