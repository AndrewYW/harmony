import { connect } from 'react-redux';
import { register, login} from '../../actions/session_actions';
import SessionForm from './session_form';

const mstp = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'register'
});

const mdtp = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(register(user)),
  login: user => dispatch(login(user)),
});

export default connect(mstp, mdtp)(SessionForm);