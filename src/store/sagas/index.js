import { all } from 'redux-saga/effects';
import authentication from './authentication';
import userList from './userList';
import userDetails from './userDetails';
import updateUserDetails from './updateUserDetails';
import deleteUserDetails from './deleteUserDetails';

export default function* root() {
  yield all([
    authentication(),
    userList(),
    userDetails(),
    updateUserDetails(),
    deleteUserDetails(),
  ]);
}
