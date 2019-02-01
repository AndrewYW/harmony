import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import UserBlurb from './user_blurb';
class ServerDetail extends React.Component {

  componentDidMount() {
    // this.props.fetchServer(this.props.match.params.serverId);
    // this.props.fetchServers();
    // debugger;
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

  render() {
    return (
      <section className="server-detail">
        <div className="channel-block">
          <div className="channel-header">
            {this.props.server.name}
          </div>
          <div className="channel-list">

          </div>
          <UserBlurb />
        </div>
        <div className="content-block">
          <div className="content-header">
            <h1>CONTENT HEADER</h1>
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