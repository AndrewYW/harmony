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
    e.preventDefault();
    this.setState({ invite: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.joinServer(this.state.invite)
    .then(({ server, errors }) => {
        if (!errors) {
          this.props.closeModal();
          this.props.history.push(`/channels/${server.discord_id}/${server.default_channel_id}`);
        }
      });
  }

  render() {
    const { toDefault } = this.props;

    return (
      <form onSubmit={this.handleSubmit} id="join-modal" className="join-form">
        <div className="join-content">
          <h5>JOIN A SERVER</h5>
          <p>Enter an Instant Invite below to join an existing server. The invite will look something like this:</p>
          <ul>
            <li>http://harmony-rb.herokuapp.com/Ds5Rjk</li>
            <li>Ds5Rjk</li>
          </ul>
          <div className="join-inputs">
            <input type="text" value={this.state.invite} onChange={this.update} />
            <span>Enter an instant invite</span>
          </div>
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