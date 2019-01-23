import { connect } from 'react-redux';
import { register } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'register',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(register(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);