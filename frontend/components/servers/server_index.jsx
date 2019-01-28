import React from 'react';
import { Route, Link } from 'react-router-dom';

class ServerIndex extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {}
  }
  componentDidMount() {
    console.log(this.props);
  }

  componentDidUpdate() {
    
  }
  render() {
    // const servers = this.props.servers
    return (
      <div className="server-sidebar">
        <Link to="/channels/@me">

        </Link>
        <div className="server-split" />
        <ul className="server-ul">
          {/* { servers } */}
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