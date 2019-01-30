import { connect } from 'react-redux';
import ServerIndex from './server_index';
import { logout } from '../../actions/session_actions';
import { fetchServers } from '../../actions/server_actions';

const mstp = ({session, entities}) => {
  return {
  userId: session.id,
  servers: entities.servers,
  }
}

const mdtp = dispatch => ({
  fetchServers: () => dispatch(fetchServers()),
  logout: () => dispatch(logout()),
})

export default connect(mstp, mdtp)(ServerIndex);