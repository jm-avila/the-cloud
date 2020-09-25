import { all } from 'redux-saga/effects';
import userList from './userList';
import userDetails from './userDetails';
import updateUserDetails from './updateUserDetails';

export default function* root() {
  yield all([userList(), userDetails(), updateUserDetails()]);
}
