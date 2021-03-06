import React from 'react';
import { connect } from 'react-redux';
import { createServer } from '../../../actions/server_actions';
import { withRouter } from 'react-router';

class CreateModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    }
  }

  update = e => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    
    this.props.createServer(this.state)
      .then( ({ server, errors }) => {
        if (!errors) {
          this.props.closeModal();
          this.props.history.push(`/channels/${server.discord_id}/${server.default_channel_id}`);
        }
      });
  }

  render() {
    const { toDefault } = this.props;

    return (
      <form onSubmit={this.handleSubmit} id="create-modal" className="create-form">
        <div className="create-div">
          <h5>Create your server</h5>
          <p>By creating a server, you will have access to free voice and text chat to use amongst your friends.</p>
          <div className="create-inputs">
            <label>SERVER NAME
              <input type="text"
                onChange={this.update}
                value={this.state.name}
                placeholder="Enter a server name" />
            </label>
          </div>
        </div>
        <div className="create-buttons">
          <button type="button" onClick={toDefault}>Back</button>
          <input type="submit" value="Create" />
        </div>
      </form>
    );
  }
}

const mdtp = dispatch => ({
  createServer: server => dispatch(createServer(server)),
});

export default withRouter(connect(null, mdtp)(CreateModal));  