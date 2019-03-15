import React from 'react';
import { connect } from 'react-redux';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    }
  }

  update(e) {
    this.setState({
      body: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="message-form"></div>
    )
  }
}

const mstp = state => ({

});

const mdtp = dispatch => ({

});

export default (connect(mstp, mdtp)(MessageForm))