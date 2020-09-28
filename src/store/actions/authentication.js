export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

export function login(payload) {
  return { type: LOGIN, payload };
}

export function logout() {
  return { type: LOGOUT };
}
