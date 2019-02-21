import React from 'react';
import { withRouter } from 'react-router';

const ChannelIndexItem = ({ channel }) => {
  return(
    <li className="server-channel">
      <div className="channel-name"># <span>{channel.name}</span></div>
    </li>
  );
}

export default withRouter(ChannelIndexItem);