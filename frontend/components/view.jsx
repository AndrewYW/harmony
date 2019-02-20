import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import ServerIndex from './servers/server_index_container';
import DMServerDetail from './servers/dm_server_container';
import ServerDetail from './servers/server_detail_container';
import { fetchServers } from '../actions/server_actions';

class View extends React.Component {
  componentWillMount() {
    this.props.fetchServers();
    debugger
  }

  render() {
    return (
      <div className="app-view">
        <Route path="/channels/" component={ServerIndex} />
        <Switch>
          <Route exact path="/channels/@me" component={DMServerDetail} />
          <Route path="/channels/:serverId/:channelId" component={ServerDetail} />
        </Switch>
      </div>
    )
  }
};

const mdtp = dispatch => ({
  fetchServers: () => dispatch(fetchServers()),
})
export default connect(null, mdtp)(View);