import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const receiveUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
})

export const editUser = user => dispatch => (
  UserAPIUtil.editUser(user).then(user => (
    dispatch(receiveUser)
  ))
)

export const requestUser = id => dispatch => (
  UserAPIUtil.fetchUser(id).then(user => (
    dispatch(receiveUser(user))
  ))
);

export const requestUsers = id => dispatch => (
  UserAPIUtil.fetchUsers(id).then(users => (
    dispatch(receiveUsers(users))
  ))
);