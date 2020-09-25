import { call, put, takeLatest, select } from 'redux-saga/effects';
import {
  LOAD_USER,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR,
} from '../actions/userDetails';

function* handleUserByIdRequest() {
  try {
    const id = yield select(getId);
    const payload = yield call(getData, id);
    yield put({ type: LOAD_USER_SUCCESS, payload });
  } catch (e) {
    yield put({ type: LOAD_USER_ERROR, payload: e });
  }
}

function getId({ userDetails }) {
  return userDetails.id;
}

async function getData(id) {
  const response = await fetch('https://reqres.in/api/users/' + id);
  const { data } = await response.json();
  return data;
}

export default function* watchUsersListRequest() {
  yield takeLatest(LOAD_USER, handleUserByIdRequest);
}
