import {
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
} from '../actions/updateUserDetails';

const INITIAL_STATE = {
  id: null,
  email: null,
  first_name: null,
  last_name: null,
  avatar: null,
  updated: false,
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_USER:
      return { ...INITIAL_STATE, ...payload, loading: true };
    case UPDATE_USER_SUCCESS:
      return { ...state, loading: false, updated: true };
    case UPDATE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Lo siento, algo fallo y no pudimos actualizar el usuario.',
      };

    default:
      return state;
  }
};
