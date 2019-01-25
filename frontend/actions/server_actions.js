import * as ServerAPIUtil from '../util/server_api_util';

export const RECEIVE_ALL_SERVERS = "RECEIVE_ALL_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER";

const receiveAllServers = servers => {
  return {
    type: RECEIVE_ALL_SERVERS,
    servers
  }
};

const receiveServer = server => ({
  type: RECEIVE_SERVER,
  server
});

export const fetchServers = () => dispatch => (
  ServerAPIUtil.fetchServers().then(servers => (
    dispatch(receiveAllServers(servers))
  ))
);

export const fetchServer = id => dispatch (
  ServerAPIUtil.fetchServer(id).then(server => (
    dispatch(receiveServer(server))
  ))
);