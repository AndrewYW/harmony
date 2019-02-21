import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";
export const START_LOADING = "START_LOADING";
export const STOP_LOADING = "STOP_LOADING";

export const receiveCurrentUser = user => {
  return {
  type: RECEIVE_CURRENT_USER,
  user
  };
};

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});

export const startLoading = () => ({
  type: START_LOADING,
});

export const stopLoading = () => ({
  type: STOP_LOADING,
});

export const register = user => dispatch => (
  APIUtil.register(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
    APIUtil.logout().then(user => (
      dispatch(logoutCurrentUser())
    ))
);