import { all } from 'redux-saga/effects';
import authentication from './authentication';
import userList from './userList';
import userDetails from './userDetails';

export default function* root() {
  yield all([authentication(), userList(), userDetails()]);
}
