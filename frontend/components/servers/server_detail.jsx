import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import UserBlurb from './user_blurb';
class ServerDetail extends React.Component {

  constructor(props){
    super(props);

    this.updateCurrentChannel = this.updateCurrentChannel.bind(this);
    this.state = ({
      currentChannel: "General"
    })
  }
  componentDidMount() {
    // this.props.fetchServer(this.props.match.params.serverId);
    // this.props.fetchServers();
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.match.params.serverId != this.props.match.params.serverId){
  //     this.props.fetchServer(this.props.match.params.serverId);
  //   }
  // }

  serverMembers() {
    if (this.props.members != undefined) {
      const members = this.props.members.map(member => {
        return (
          <li key={member.id} className="server-member">{member.username}</li>
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

  serverChannels() {
    if (this.props.server.channels != undefined){ 
      const channels = this.props.server.channels.map(channel => {
        return (
          <li key={channel.id} className="server-channel" onClick={this.updateCurrentChannel}># {channel.name}</li>
        )
      });

      return (
        <div className="server-channels">
          <div className="channel-category">CHANNELS</div>
          <ul className="channel-ul">
            {channels} 
          </ul>
        </div>
      )
    }
  }
  updateCurrentChannel(e) {
    e.preventDefault();
    this.setState({
      currentChannel: e.target.innerText
    })
  }

  render() {
    return (
      <section className="server-detail">
        <div className="channel-block">
          <div className="channel-header">
            {this.props.server.name}
          </div>
          <div className="channel-list">
            {this.serverChannels()}
          </div>
          <UserBlurb />
        </div>
        <div className="content-block">
          <div className="content-header">
            <h1>{this.state.currentChannel}</h1>
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