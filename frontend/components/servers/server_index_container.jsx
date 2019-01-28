import { connect } from 'react-redux';
import ServerIndex from './server_index';
import { logout } from '../../actions/session_actions';
import { fetchServers, fetchServer } from '../../actions/server_actions';

const mstp = ({session, entitites}) => ({
  userId: session.id,
  servers: entities.servers,
})

const mdtp = dispatch => ({
  fetchServers: () => dispatch(fetchServers()),
  fetchServer: id => dispatch(fetchServer(id)),
  logout: () => dispatch(logout()),
})

export default connect(mstp, mdtp)(ServerIndex);