import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPIUtil from './util/session_api_util';
import * as ServerAPIUtil from './util/server_api_util';
import configureStore from './store/store';
import Root from './components/root';
import { fetchServer, fetchServers } from './actions/server_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');

  //testing
  window.register = SessionAPIUtil.register;
  window.login = SessionAPIUtil.login;
  window.logout = SessionAPIUtil.logout;
  window.fetchServers = fetchServers;
  window.fetchServer = fetchServer;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  
  ReactDOM.render(<Root store={ store } />, root);
});


