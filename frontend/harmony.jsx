import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPIUtil from './util/session_api_util';
document.addEventListener('DOMContentLoaded', () => {
  window.signup = SessionAPIUtil.signup;
  window.login = SessionAPIUtil.login;
  window.logout = SessionAPIUtil.logout;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>HARMONY</h1>, root);
});


