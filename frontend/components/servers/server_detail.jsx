import React from 'react';
import { Route, withRouter } from 'react-router-dom';

class ServerDetail extends React.Component {
  componentDidMount() {
    // this.props.fetchServer(this.props.match.params.serverId);
  }

  componentDidUpdate(prevProps) {
    // if (prevProps.match.params.serverId != this.props.match.params.serverId){
    //   this.props.fetchServer(this.props.match.params.serverId);
    // }
  }

  serverMembers() {
    return (
      <div className="server-members">
        <ul>
          <li className="server-member">donk</li>
          <li className="server-member">donk</li>
          <li className="server-member">donk</li>
          <li className="server-member">donk</li>
          <li className="server-member">donk</li>
          <li className="server-member">donk</li>
        </ul>
      </div>
    )
  }

  render() {
    return (
      <section className="server-detail">
        <div className="channel-block">
          <div className="channel-header"></div>
        </div>
        <div className="content-block">
          <div className="content-header">

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