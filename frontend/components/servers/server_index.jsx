import React from 'react';
import { Route, Link } from 'react-router-dom';
import ServerIndexItem from './server_index_item';
import ServerDetail from './server_detail_container';
class ServerIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      servers: {},
      currentServer: {},
    }

    this.openServerModal = this.openServerModal.bind(this);
  }
  componentDidMount() {
    this.props.fetchServers();
    this.setState({
      currentServer: this.state.servers['1'],
    })
  }

  openServerModal() {

  }
  serverMembers() {
    //render members of server if not in friends list
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
    const servers = Object.values(this.props.servers).map(server => {
      if (server.id != 1) { return (
        <Link key={server.id} to={`/channels/${server.discord_id}/`} >
          <ServerIndexItem server={server}>{server.name}</ServerIndexItem>
        </Link>
      )}
      
    });
    
    return (
      <div className="server-index">
        <div className="server-sidebar">
          <ul className="server-ul">
            <Link to="/channels/@me" className="home-link">
              <li>
                H
                <div className="server-name">Home</div>
              </li>
            </Link>
          </ul>
          <div className="server-split" />
          <ul className="server-ul">
            { servers }
          </ul>
          <button className="server-add-button" onClick={this.openServerModal}>
            +
          </button>
          <div className="server-split" />
          <button className="logout-button" onClick={this.props.logout}>
            L
            <div className="server-name">Logout</div>
          </button>
          {/* Modal here */}
        </div>


        <ServerDetail />


      </div>
    )
  }
}

export default ServerIndex;