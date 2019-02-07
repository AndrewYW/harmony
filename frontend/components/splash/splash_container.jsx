import { connect } from 'react-redux';
import Splash from './splash';
import { login } from '../../actions/session_actions';

const mstp = ({session, entities: { users }}) => {
  return { currentUser: users[session.id] };
};

const mdtp = dispatch => ({
  login: user => dispatch(login(user)),
})

export default connect(mstp, mdtp)(Splash);