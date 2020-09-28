import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
} from '../actions/authentication';

const INITIAL_STATE = {
  email: null,
  password: null,
  token: null,
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...INITIAL_STATE,
        ...payload,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        password: null,
        error: null,
        token: payload,
      };
    case LOGIN_ERROR:
      return {
        ...INITIAL_STATE,
        error: payload,
      };
    case LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
