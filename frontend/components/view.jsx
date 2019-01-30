import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ServerIndex from './servers/server_index_container';
import DMServerDetail from './servers/dm_server_container';
import ServerDetail from './servers/server_detail_container';


class View extends React.Component {
  componentDidMount() {
    
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

export default (View);