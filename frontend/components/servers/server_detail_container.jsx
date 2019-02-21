import { connect } from 'react-redux';
import ServerDetail from './server_detail';
import { fetchServer, fetchServers } from '../../actions/server_actions';
import { requestChannels, requestChannel } from '../../actions/channel_actions';

const mstp = (state = {}, ownProps) => {
  const serverId = ownProps.match.params.serverId;
  const channelId = ownProps.match.params.channelId;
  const servers = Object.values(state.entities.servers);
  const channels = Object.values(state.entities.channels);
  const channel = channels.find(channel => channel.discord_id === channelId) || {};
  const server = servers.find(server => server.discord_id === serverId) || {};
  const members = server.members;
  return {
    server, serverId, channelId, members, channel
  };
};

const mdtp = dispatch => ({
  fetchServer: discord_id => dispatch(fetchServer(discord_id)),
  fetchServers: () => dispatch(fetchServers()),
  requestChannels: discord_id => dispatch(requestChannels(discord_id)),
  requestChannel: channelId => dispatch(requestChannel(channelId)),
});

export default connect(mstp, mdtp)(ServerDetail);
