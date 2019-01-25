import { connect } from 'redux';
import ServerIndex from './server_index';
import { fetchServers, fetchServer } from '../../actions/server_actions';

const mstp = ({servers}) => ({
  servers,
})

const mdtp = dispatch => ({
  fetchServers: () => dispatch(fetchServers()),
  fetchServer: id => dispatch(fetchServer(id)),
})

export default connect(mstp, mdtp)(ServerIndex);