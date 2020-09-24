import { combineReducers } from 'redux';
import authentication from './authentication';
import userList from './userList';
import userDetails from './userDetails';

export default combineReducers({
  authentication,
  userList,
  userDetails,
});
