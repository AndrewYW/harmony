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
    this.props.fetchServers();
    ReactModal.setAppElement(".server-index");

    // console.log(this.state);
  }

  componentDidUpdate() {
    
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
        <Link key={server.id} to={`/channels/${server.discord_id}/23452345`} >
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
          
        </div>
        <ServerModal 
          showServerModal={this.state.showServerModal} 
          closeServerModal={this.closeServerModal}
          className="server-modal">asdf</ServerModal>
      </div>
    )
  }
}

export default withRouter(ServerIndex);