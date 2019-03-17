import React from 'react';
import { connect } from 'react-redux';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(e) {
    this.setState({
      body: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    App.chatChannel.speak({
      body: this.state.body,
      author_id: this.props.userId,
      channel_id: this.props.channel.id,
    });
    this.setState({
      body: ""
    });
  }

  render() {
    return (
      <div className="message-form-wrapper">
        <form onSubmit={ this.handleSubmit } className="message-form">
          <input
            className="message-input" 
            type="text" 
            onChange={ this.update } 
            value={ this.state.body }
            placeholder={ `Message #${this.props.channel.name}` }/>
        </form>
      </div>
    )
  }
}

const mstp = state => ({

});


export default (connect(mstp)(MessageForm))