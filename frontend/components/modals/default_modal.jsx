import React from 'react';


class DefaultModal extends React.Component {
  constructor(props){
    super(props);
  }
  

  render() {
    return (
      <section className="default-modal">
        <h1>OH, ANOTHER SERVER HUH?</h1>
        <div className="buttons">
          <button className="create-server-button" onClick={this.props.createServer}>
            <h2>CREATE</h2>
            <p>Create a new server and invite your friends. It's free!</p>
            <div className="fake-button">Create a server</div>
          </button>
          <div className='or'>or</div>
          <button className="join-server-button" onClick={this.props.joinServer}>
            <h2>JOIN</h2>
            <p>Enter an Instant Invite and join your friend's server</p>
            <div className="fake-button">Join a server</div>
          </button>
        </div>
      </section>
    )
  }
}

export default DefaultModal;