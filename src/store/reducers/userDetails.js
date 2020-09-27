import {
  LOAD_USER,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
} from '../actions/userDetails';

const INITIAL_STATE = {
  id: null,
  email: null,
  first_name: null,
  last_name: null,
  updated: false,
  deleted: false,
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_USER:
      return {
        ...state,
        id: payload,
        loading: true,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case LOAD_USER_ERROR:
      return {
        ...state,
        error:
          'Lo siento, algo fallo y no pudimos descargar la informacion del usuario.',
      };
    case UPDATE_USER:
      return { ...state, ...payload, loading: true };
    case UPDATE_USER_SUCCESS:
      return { ...state, loading: false, updated: true };
    case UPDATE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Lo siento, algo fallo y no pudimos actualizar el usuario.',
      };
    case DELETE_USER:
      return { ...state, loading: true };
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
