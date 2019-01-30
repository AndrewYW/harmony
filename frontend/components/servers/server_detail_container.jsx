import { connect } from 'react-redux';
import ServerDetail from './server_detail';
import { fetchServer } from '../../actions/server_actions';

const mstp = (state = {}, ownProps) => {
  // debugger;
  const serverId = ownProps.match.params.serverId;
  const channelId = ownProps.match.params.channelId;
  const server = state.entities.servers[serverId] || {};
  
  return {
    server, serverId, channelId
  };
};

const mdtp = dispatch => ({
  fetchServer: id => dispatch(fetchServer(id)),
});

export default connect(mstp, mdtp)(ServerDetail);
