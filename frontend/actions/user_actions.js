import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const editUser = user => dispatch (
  UserAPIUtil.editUser(user).then(user => (
    dispatch(receiveUser)
  ))
)