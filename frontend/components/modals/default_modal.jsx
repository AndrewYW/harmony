import React from 'react';


class DefaultModal extends React.Component {
  constructor(props){
    super(props);

  
  }
  

  render() {
    return (
      <section className="default-modal">
        <h1>OH, ANOTHER SERVER HUH?</h1>

        <button className="create-server-button" onClick={this.props.createServer}>
          <h2>CREATE</h2>
          <div>Create a new server and invite your friends. It's free!</div>
          <div className="fake-button">Create a server</div>
        </button>
        <div>or</div>
        <button className="join-server-button" onClick={this.props.joinServer}>
          <h2>JOIN</h2>
          <div>Enter an Instant Invite and join your friend's server</div>
          <div className="fake-button">Join a server</div>
        </button>
      </section>
    )
  }
}

export default DefaultModal;