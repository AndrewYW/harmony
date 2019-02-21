import React from 'react';
import { withRouter } from 'react-router';
import { Link, NavLink} from 'react-router-dom';

import ChannelIndexItem from './channel_index_item';


class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.requestChannels(this.props.match.params.serverId);
    this.props.requestChannel(this.props.match.params.channelId);
  }

  componentDidUpdate(oldProps) {
    if (this.props.match.params.serverId !== oldProps.match.params.serverId) {
      this.props.requestChannels(this.props.match.params.serverId)
    }
  }
  render() {
    const channels = Object.values(this.props.channels).map(channel => {
      return(
      <NavLink activeClassName="selected-channel" key={channel.id} to={`${channel.discord_id}`}>
        <ChannelIndexItem channel={channel} />
      </NavLink>
      )
    });

    return (
      <div className="server-channels">
        <div className="channel-category">CHANNELS</div>
        <ul className="channel-ul">
          { channels } 
        </ul>
      </div>
    )
  }
}

export default withRouter(ChannelIndex);