import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import ChannelIndex from '../channels/channel_index_container';
import UserBlurb from './user_blurb';

class ServerDetail extends React.Component {

  constructor(props){
    super(props);
    
  }

  componentDidMount() {
    this.props.requestChannel(this.props.match.params.channelId);
  }

  componentDidUpdate(oldProps) {
    if(this.props.match.params.serverId !== oldProps.match.params.serverId){
      this.props.requestChannels(this.props.match.params.serverId);
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
            {this.props.server.name}, {this.props.server.instant_invite}
          </div>
          <div className="channel-list">
            <ChannelIndex />
          </div>
          <UserBlurb />
        </div>
        <div className="content-block">
          <div className="content-header">
            <h1># {this.props.channel.name}</h1>
          </div>
          <div className="content">
            <div className="message-block">
              <div className="message-feed"></div>
              <div className="message-input">
                <form action="submit" className="message-form">
                </form>
              </div>
            </div>
            {this.serverMembers()}
          </div>
        </div>
      </section>
    )
  }
}

export default withRouter(ServerDetail);