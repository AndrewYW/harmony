import React from 'react';
import { withRouter } from 'react-router';

const ServerIndexItem = ({ server }) => {
  return (
    <li>
      {server.name[0]}
      <div className="server-name">{server.name}</div>
    </li>
  )
}

export default withRouter(ServerIndexItem);