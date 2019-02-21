import React from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import ReactModal from 'react-modal';
import ServerIndexItem from './server_index_item';
import ServerModal from '../modals/server_modal';
class ServerIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showServerModal: false,
      servers: {},
      currentServer: {},
    }
    this.closeServerModal = this.closeServerModal.bind(this);
    this.openServerModal = this.openServerModal.bind(this);
  }
  componentDidMount() {
    // this.props.fetchServers();
    ReactModal.setAppElement(".server-index");
    this.props.fetchServers();
  }

  openServerModal() {
    this.setState({
      showServerModal: true,
    })
  }
  closeServerModal() {
    this.setState({
      showServerModal: false,
    })
  }

  render() {
    const servers = Object.values(this.props.servers).map(server => {
      if (server.id != 1) { return (
        <Link key={server.id} to={`/channels/${server.discord_id}/${server.default_channel_id}`} >
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
                <img className="minilogo" src={window.minilogo}/>
                <div className="server-name">Home</div>
              </li>
            </Link>

            <div className="server-split" />

            { servers }

            <button className="server-add-button" onClick={this.openServerModal}>
              <p>{'\uFF0B'}</p>
              <div className="server-name">Add a server</div>
            </button>

            <div className="server-split" />

            <button className="logout-button" onClick={this.props.logout}>
              <p>L</p>
              <div className="server-name">Logout</div>
            </button>
          </ul>
          
          
          
          
        </div>
        <ServerModal 
          showServerModal={this.state.showServerModal} 
          closeServerModal={this.closeServerModal}
          className="server-modal"></ServerModal>
      </div>
    )
  }
}

export default withRouter(ServerIndex);