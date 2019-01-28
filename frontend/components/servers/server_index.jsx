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

  render() {
    const servers = Object.values(this.props.servers).map(server => (
      <Link key={server.id} to={`/channels/${server.discord_id}/`} >
        <ServerIndexItem server={server}>{server.name}</ServerIndexItem>
      </Link>
    ));
    { console.log(Object.values(this.props.servers).map(server => server.discord_id))}
    
    return (
      <div className="server-sidebar">
        <Link to="/channels/@me">
        asdfasdf
        </Link>
        <div className="server-split" />
        <ul className="server-ul">
          { servers }
        </ul>
        <button className="server-add-button"></button>
        <div className="logout-button" onClick={this.props.logout}>
          +
        </div>
        {/* Modal here */}
      </div>
    )
  }
}

export default ServerIndex;