import { connect } from 'react-redux';
import Navbar from './navbar';

const mstp = ({session, entities: { users }}) => {
  return { currentUser: users[session.id] };
};

export default connect(mstp, null)(Navbar);