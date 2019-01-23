import { connect } from 'react-redux';
import Splash from './splash';

const mstp = ({session, entities: { users }}) => {
  return { currentUser: users[session.id] };
};

export default connect(mstp, null)(Splash);