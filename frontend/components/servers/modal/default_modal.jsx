import React from 'react';

const DefaultModal = ({ createServer, joinServer }) => {
  return <div className="default-modal" id="default-modal">
    <h1>OH, ANOTHER SERVER HUH?</h1>
    <div className="buttons">
      <div className="create-server-button" onClick={createServer}>
        <h2>CREATE</h2>
        <p>Create a new server and invite your friends. It's free!</p>
        <div className="create-server-icon"/>
        <button className="fake-button">Create a server</button>
      </div>
      <div className="join-server-button" onClick={createServer}>
        <h2>JOIN</h2>
        <p>Enter an Instant Invite and join your friend's server</p>
        <div className="join-server-icon"/>
        <button className="fake-button">Join a server</button>
      </div>
    </div>
  </div>
};

export default DefaultModal;