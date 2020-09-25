export const LOAD_USERS = 'LOAD_USERS';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const LOAD_USERS_ERROR = 'LOAD_USERS_ERROR';

export function loadUsers() {
  return { type: LOAD_USERS };
}

export function changePage(payload) {
  return { type: CHANGE_PAGE, payload };
}
