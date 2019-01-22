import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPIUtil from './util/session_api_util';
import configureStore from './store/store';
document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  //testing
  window.signup = SessionAPIUtil.signup;
  window.login = SessionAPIUtil.login;
  window.logout = SessionAPIUtil.logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  
  const root = document.getElementById('root');
  ReactDOM.render(<h1>HARMONY</h1>, root);
});


