import { connect } from 'react-redux';
import DMServer from './dm_server_detail';
import { fetchServer } from '../../actions/server_actions';

const mstp = (state = {}, ownProps) => {
  // debugger;
  return {
    server: state.entities.servers,
  }
}

const mdtp = dispatch => ({
  fetchServer: id => dispatch(fetchServer(id)),
});

export default connect(mstp, mdtp)(DMServer);