import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createChannel } from '../../actions/channel_actions';

class ChannelModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      name: "",
      server: this.props.server,
    }
  }
  
  update = e => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const currentServer = this.state.server;
    const newChannel = { name: this.state.name, server_id: currentServer.id};

    this.props.createChannel(newChannel)
      .then(({channel}) => {
        this.props.closeModal();
        this.props.history.push(`/channels/${currentServer.discord_id}/${channel.discord_id}`);
      })
  }

  render() {
    const serverName = this.state.server.name
    return (
      <form onSubmit={this.handleSubmit} className="channel-form">
        <div className="channel-form-header">
          <h1>Create Channel</h1>
          <h2>in {serverName}</h2>
        </div>
        <div className="channel-form-content">
          <h2>Channel Name</h2>
          <input type="text" onChange={this.update} value={this.state.name} />
        </div>
        <div className="channel-form-buttons">
          <button type="button" onClick={this.props.closeModal}>Cancel</button>
          <input type="submit" value="Create Channel" />
        </div>
      </form>
    );
  }
}

const mstp = state => ({
  server: state.ui.server,
});

const mdtp = dispatch => ({
  createChannel: channel => dispatch(createChannel(channel)),
});

export default withRouter(connect(mstp, mdtp)(ChannelModal));