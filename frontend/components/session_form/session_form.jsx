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
    console.log(user);
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
        <>
          <h1>Welcome back!</h1>
          <h3>We're so excited to see you again!</h3>
        </>
      )
    } else {
      return (
        <>
          <h1>Create an account</h1>
          <h3></h3>
        </>
      )
    }
  }

  usernameLabel() {
    return (
      <div className="formInput">
        <label>USERNAME</label>
        <input type="text" value={this.state.username} onChange={this.handleChange('username')} />
      </div>
    )
  }
  formContent() {
    return (
        <form className="session-form">
          {this.formHeader()}
          <div className="formInput">
            <label>EMAIL</label>
            <input type="text" value={this.state.email} onChange={this.handleChange('email')} />
          </div>

          {this.formType() ? null : this.usernameLabel() }
          <div className="formInput">
            <label>PASSWORD</label>
            <input type="text" value={this.state.password} onChange={this.handleChange('password')} />
          </div>
          <input className="formButton" type="submit" value={this.formType() ? "Login": "Continue"} onClick={this.handleSubmit} />
          {this.formFooter()}
        </form>
    )
  }

  formFooter() {
    if (this.formType()){
      return (
          <p className="loginP">Need an account? <Link className="lonk" to='/register'>Register</Link></p>
      )
    } else {
      return (
        <>
          <Link className="lonk" to='/login'>Already have an account?</Link>
          <p className="registerP">By registering, you agree to Harmony's Terms of Service and Privacy Policy.</p>
        </>
      )
    }
  }

  render() {
    return (
      <section className="session-page">
        <section className="header">
          <img className="session-logo" src={window.fullLogoBlackURL} />
        </section>
        <section className="main-content">
          {this.formContent()}
        </section>
      </section>
    )
  }
}

export default SessionForm;