import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import ChannelIndex from '../channels/channel_index_container';
import UserBlurb from './user_blurb';
import MessageIndex from '../messages/message_index';

class ServerDetail extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestChannel(this.props.match.params.channelId);
    this.props.requestUsers(this.props.match.params.serverId)
  }

  componentDidUpdate(oldProps) {
    if(this.props.match.params.serverId !== oldProps.match.params.serverId){
      this.props.requestChannels(this.props.match.params.serverId);
      this.props.requestUsers(this.props.match.params.serverId);
    }
    if(this.props.match.params.channelId !== oldProps.match.params.channelId) {
      this.props.requestChannel(this.props.match.params.channelId);
    }
  }

  serverMembers() {
    if (this.props.members != undefined) {
      const members = this.props.members.map(member => {
        return (
          <li key={member.id} className="server-member">
            <img src={window.minilogo} className="user-image"/>
            <p>{member.username}</p>
          </li>
        )
      });
      return (
        <div className="server-members">
          <div className="member-category">MEMBERS</div>
          <ul className="member-ul">
            {members}
          </ul>
        </div>
      )
    }
  }

  render() {
    return (
      <section className="server-detail">
        <div className="channel-block">
          <div className="channel-header">
            {this.props.server.name}
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
            {this.serverMembers()}
          </div>
        </div>
      </section>
    )
  }
}

export default withRouter(ServerDetail);