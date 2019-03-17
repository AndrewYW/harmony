import { connect } from 'react-redux';
import ServerDetail from './server_detail';
import { fetchServer, fetchServers } from '../../actions/server_actions';
import { requestChannels, requestChannel } from '../../actions/channel_actions';
import { requestUsers } from '../../actions/user_actions';

const mstp = (state = {}, ownProps) => {
  const serverId = ownProps.match.params.serverId;
  const servers = Object.values(state.entities.servers);
  const currentChannel = state.ui.channel;
  const server = servers.find(server => server.discord_id === serverId) || {};
  const members = Object.values(state.entities.users);
  return {
    server, members, currentChannel
  };
};

const mdtp = dispatch => ({
  fetchServer: discord_id => dispatch(fetchServer(discord_id)),
  fetchServers: () => dispatch(fetchServers()),
  requestChannels: discord_id => dispatch(requestChannels(discord_id)),
  requestChannel: channelId => dispatch(requestChannel(channelId)),
  requestUsers: serverId => dispatch(requestUsers(serverId)),
});

export default connect(mstp, mdtp)(ServerDetail);
