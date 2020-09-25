import { combineReducers } from 'redux';
import authentication from './authentication';
import userList from './userList';
import userDetails from './userDetails';
import updateUserDetails from './updateUserDetails';

export default combineReducers({
  authentication,
  userList,
  userDetails,
  updateUserDetails,
});
