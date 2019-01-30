import React from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import ServerIndexItem from './server_index_item';
import ReactModal from 'react-modal';
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
    ReactModal.setAppElement(".server-index");
    this.props.fetchServers();

    console.log(this.state);
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
          
          <ReactModal 
            isOpen={this.state.showServerModal} 
            contentLabel="Create a new Server!"
            onRequestClose={this.closeServerModal}
            className="create-server-modal"
          >
            <p>OH, ANOTHER SERVER HUH?</p>
            <form action="submit">
              <h4>CREATE YOUR SERVER</h4>
              <p>By creating a server, you will have access to <strong>free</strong> voice
              and text chat to use amongst your friends.</p>
              <p>Create a server</p>

              <label>SERVER NAME
                <input type="text" name="" placeholder="Enter a server name"/>
              </label>
              <button type="submit">Create</button>
            </form>
            <button onClick={this.closeServerModal}>Close Modal</button>

          </ReactModal>
        </div>
      </div>
    )
  }
}

export default withRouter(ServerIndex);