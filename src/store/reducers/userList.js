import {
  LOAD_USERS,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR,
} from '../actions/userList';

const INITIAL_STATE = {
  page: null,
  per_page: null,
  total: null,
  total_pages: null,
  data: [],
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_USERS:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case LOAD_USERS_SUCCESS:
      return {
        ...payload,
        loading: false,
        error: null,
      };
    case LOAD_USERS_ERROR:
      return {
        ...INITIAL_STATE,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
