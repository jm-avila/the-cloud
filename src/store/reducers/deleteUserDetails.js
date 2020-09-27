import {
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
} from '../actions/deleteUserDetails';

const INITIAL_STATE = {
  id: null,
  deleted: false,
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case DELETE_USER:
      return { ...INITIAL_STATE, id: payload, loading: true };
    case DELETE_USER_SUCCESS:
      return { ...state, loading: false, deleted: true };
    case DELETE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Lo siento, algo fallo y no pudimos eliminar el usuario.',
      };
    default:
      return state;
  }
};
