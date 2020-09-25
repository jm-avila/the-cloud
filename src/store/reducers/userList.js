import {
  LOAD_USERS,
  CHANGE_PAGE,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR,
} from '../actions/userList';

const INITIAL_STATE = {
  page: 1,
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
    case CHANGE_PAGE:
      return {
        ...INITIAL_STATE,
        page: payload,
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
      };
    default:
      return state;
  }
};
