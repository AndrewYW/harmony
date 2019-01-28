import React from 'react';
import { withRouter } from 'react-router';

const ServerIndexItem = ({ server }) => {
  return (
    <li>
      {server.name[0]}
      <div className="server-notifications">asdfasdf</div>
      <div className="server-name">{servername}</div>
    </li>
  )
}

export default withRouter(ServerIndexItem);