import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import ChannelIndex from '../channels/channel_index_container';
import UserBlurb from './user_blurb';
import MessageIndex from '../messages/message_index';
import MemberIndex from './members/member_index';

class ServerDetail extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestChannel(this.props.match.params.channelId);
    this.props.fetchServer(this.props.match.params.serverId);
  }

  componentDidUpdate(oldProps) {
    if(this.props.match.params.serverId !== oldProps.match.params.serverId){
      this.props.requestChannels(this.props.match.params.serverId);
    }
    if(this.props.match.params.channelId !== oldProps.match.params.channelId) {
      this.props.requestChannel(this.props.match.params.channelId);
    }
  }

  render() {
    return (
      <section className="server-detail">
        <div className="channel-block">
          <div className="channel-header">
            {this.props.server.name}, {this.props.server.instant_invite}
          </div>
          <div className="channel-list">
            <ChannelIndex />
          </div>
          <UserBlurb />
        </div>
        <div className="content-block">
          <div className="content-header">
            <h1># {this.props.currentChannel.name}</h1>
          </div>
          <div className="content">
            <MessageIndex />
            <MemberIndex />
          </div>
        </div>
      </section>
    )
  }
}

export default withRouter(ServerDetail);