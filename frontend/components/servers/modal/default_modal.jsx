import React from 'react';

const DefaultModal = ({ createServer, joinServer }) => {
  return <div className="default-modal" id="default-modal">
    <h1>OH, ANOTHER SERVER HUH?</h1>
    <div className="server-buttons">
      <div className="server-button create-server-button" onClick={createServer}>
        <h2>CREATE</h2>
        <p>Create a new server and invite your friends. It's free!</p>
        <div className="create-server-icon"/>
        <button>Create a server</button>
      </div>
      <div className="server-button join-server-button" onClick={joinServer}>
        <h2>JOIN</h2>
        <p>Enter an Instant Invite and join your friend's server</p>
        <div className="join-server-icon"/>
        <button>Join a server</button>
      </div>
      <div className="or">or</div>
    </div>
  </div>
};

export default DefaultModal;