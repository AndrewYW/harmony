import React from 'react';
import { Route, withRouter } from 'react-router-dom';

class ServerDetail extends React.Component {

  componentDidMount() {
    // this.props.fetchServer(this.props.match.params.serverId);
    this.props.fetchServers();
    // debugger;
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.match.params.serverId != this.props.match.params.serverId){
  //     this.props.fetchServer(this.props.match.params.serverId);
  //   }
  // }

  serverMembers() {
    debugger;
    const members = this.props.server.members.map(member => {
      return (
        <li key={member.id} className="server-member">{member.username}</li>
      )
    }) || [];
    return (
      <div className="server-members">
        <ul>
          {members}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <section className="server-detail">
        <div className="channel-block">
          <div className="channel-header">
            {this.props.server.name}
          </div>
        </div>
        <div className="content-block">
          <div className="content-header">
            CONTENT HEADER
          </div>
          <div className="content">
            <div className="message-block">
              <div className="message-feed"></div>
              <div className="message-split"></div>
              <div className="message-input"></div>
            </div>
            {this.serverMembers()}
          </div>
        </div>
      </section>
    )
  }
}

export default withRouter(ServerDetail);