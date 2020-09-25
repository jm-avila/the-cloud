import {
  LOAD_USER,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR,
} from '../actions/userDetails';

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
    case LOAD_USER:
      return {
        ...INITIAL_STATE,
        id: payload,
        loading: true,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...payload,
        loading: false,
        error: null,
      };
    case LOAD_USER_ERROR:
      return {
        ...INITIAL_STATE,
        error: payload,
      };
    default:
      return state;
  }
};
