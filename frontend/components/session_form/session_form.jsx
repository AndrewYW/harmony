import React from 'react';
import { Link } from 'react-router-dom';
class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '', 
      password: '', 
      email: '' 
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push('/'));
  }

  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  formType() {
    return (this.props.formType === 'login');
  }

  formHeader() {
    if (this.formType()) {
      return (
        <div className="formHeader">
          <h1>Welcome back!</h1>
          <h2>We're so excited to see you again!</h2>
        </div>
      )
    } else {
      return (
        <div className="formHeader">
          <h1>Create an account</h1>
        </div>
      )
    }
  }

  emailLabel() {
    return (
      <label>EMAIL
        <input type="text" value={this.state.password} onChange={this.handleChange('email')} />
      </label>
    )
  }
  formContent() {
    return (
      <div>
        <form className="formEl">
          {this.formType() ? <></> : this.emailLabel() }
          <label>USERNAME
              <input type="text" value={this.state.username} onChange={this.handleChange('username')} />
          </label>
          <label>PASSWORD
              <input type="text" value={this.state.password} onChange={this.handleChange('password')} />
          </label>
          <input type="submit" value={this.formType() ? "Login": "Continue"} onClick={this.handleSubmit} />
        </form>
      </div>
    )
  }

  formFooter() {
    if (this.formType()){
      return (
        <div className="formFooter">
          <p>Need an account? <Link to='/register'>Register</Link></p>
        </div>
      )
    } else {
      return (
        <div className="formFooter">
          <Link to='/login'>Already have an account?</Link>
          <p>By registering, you agree to Harmony's Terms of Service and Privacy Policy.</p>
        </div>
      )
    }
  }

  render() {
    return (
      <section className="session_form">
        <section className="sessionLogo">
          
        </section>
        <section className="sessionBlock">
          {this.formHeader()}
          {this.formContent()}
          {this.formFooter()}
        </section>
      </section>
    )
  }
}

export default SessionForm;