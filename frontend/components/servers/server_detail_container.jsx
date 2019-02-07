import { connect } from 'react-redux';
import ServerDetail from './server_detail';
import { fetchServer, fetchServers } from '../../actions/server_actions';

const mstp = (state = {}, ownProps) => {
  const serverId = ownProps.match.params.serverId;
  const channelId = ownProps.match.params.channelId;
  const servers = Object.values(state.entities.servers);
  
  const server = servers.find(server => server.discord_id === serverDiscordId) || {};
  const members = server.members;
  return {
    server, serverId, channelId, members
  };
};

const mdtp = dispatch => ({
  fetchServer: discord_id => dispatch(fetchServer(discord_id)),
  fetchServers: () => dispatch(fetchServers()),
});

export default connect(mstp, mdtp)(ServerDetail);
