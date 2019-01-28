import React from 'react';
import { Route, Link } from 'react-router-dom';
import ServerIndexItem from './server_index_item';
class ServerIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      servers: props.servers,
    }
  }
  componentDidMount() {
    this.props.fetchServers();

  }

  componentDidUpdate() {
    
  }

  serverMembers() {
    //render members of server if not in friends list
    console.log("asddlkjasdf")
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
    const servers = Object.values(this.props.servers).map(server => (
      <Link key={server.id} to={`/channels/${server.discord_id}/`} >
        <ServerIndexItem server={server}>{server.name}</ServerIndexItem>
      </Link>
    ));
    
    return (
      <div className="server-index">
        <div className="server-sidebar">
          <Link to="/channels/@me">
            <div className="home-server">
              <div className="server-name">Home</div>
            </div>
          </Link>
          <div className="server-split" />
          <ul className="server-ul">
            { servers }
          </ul>
          <button className="server-add-button">+</button>
          <div className="server-split" />
          <button className="logout-button" onClick={this.props.logout}>
            L
          </button>
          {/* Modal here */}
        </div>
        <div className="channel-block">
          <div className="channel-header"></div>
        </div>
        <div className="content-block">
          <div className="content-header">
            
          </div>
          <div className="content">
            <div className="message-block">
              <div className="message-feed"></div>
              <div className="message-input"></div>
            </div>
            {this.serverMembers()}
          </div>
        </div>
      </div>
    )
  }
}

export default ServerIndex;