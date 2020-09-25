import { UPDATE_USER } from '../actions/updateUserDetails';

const INITIAL_STATE = {
  id: null,
  email: null,
  first_name: null,
  last_name: null,
  avatar: null,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_USER:
      return payload;
    default:
      return state;
  }
};
