import { all } from 'redux-saga/effects';
import userList from './userList';

export default function* root() {
  yield all([userList()]);
}
