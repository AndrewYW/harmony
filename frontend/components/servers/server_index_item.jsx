import React from 'react';
import { withRouter } from 'react-router';

const ServerIndexItem = ({ server }) => {
  return (
    <li>
      <img className="server-logo" src={window.minilogo} />
      <div className="server-name">{server.name}</div>
    </li>
  )
}

export default withRouter(ServerIndexItem);