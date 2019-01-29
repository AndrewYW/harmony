import { connect } from 'react-redux';

import ServerDetail from './server_detail';
import { fetchServer } from '../../actions/server_actions';

const mstp = (state = {}, ownProps) => {
  // const serverId = (ownProps.match.params.serverId === '@me') ? 1 : ownProps.match.params.serverId;
  // debugger;
  const serverId = (ownProps.server === undefined) ? 1 : ownProps.server.id;
  const server = state.entities.servers[serverId] || {name: "home", admin_id: 1, };
  
  return {
    server, 
  };
};

const mdtp = dispatch => ({
  fetchServer: id => dispatch(fetchServer(id)),
});

export default connect(mstp, mdtp)(ServerDetail);
