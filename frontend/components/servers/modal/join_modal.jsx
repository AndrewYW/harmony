import React from 'react';
import { connect } from 'react-redux';
import { joinServer } from '../../../actions/server_actions';
import { withRouter } from 'react-router';

class JoinModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      invite: "",
    })
  }

  update = e => {
    this.setState({ invite: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.joinServer(this.state.invite)
      .then(this.props.closeModal())
      .then(({ server }) => {
        this.props.history.push(`/channels/${server.discord_id}/${server.default_channel_id}`);
      });
  }

  render() {
    const { toDefault } = this.props;

    return (
      <form onSubmit={this.handleSubmit} className="join-form">
        <div className="join-div">
          <h5>JOIN A SERVER</h5>
          <p>Enter an Instant Invite below to join an existing server. The invite will look something like this:</p>
          <div>Ds5Rjk</div>
        </div>
        <div className="join-inputs">
          <input type="text" value={this.state.invite} onChange={this.update}/>
          <p>Enter an instant invite</p>
        </div>
        <div className="join-buttons">
          <button onClick={toDefault}>Back</button>
          <input type="submit" value="Join"/>
        </div>
      </form>
    );
  }
}

const mdtp = dispatch => ({
  joinServer: invite => dispatch(joinServer(invite)),
});

export default withRouter(connect(null, mdtp)(JoinModal));