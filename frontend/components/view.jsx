import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { startLoading, stopLoading } from '../actions/session_actions';
import ServerIndex from './servers/server_index_container';
import DMServerDetail from './servers/dm_server_container';
import ServerDetail from './servers/server_detail_container';


class View extends React.Component {
  componentWillMount() {
    this.props.startLoading();
  }

  componentDidMount() {
    setTimeout(() => {
      $(".loading-progress").html("READY");
      setTimeout(() => {
        $(".loader").addClass("stop-loading");
        setTimeout(() => {
          this.props.stopLoading();
        }, 500)
      }, 1000)
    }, 1500);
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
  startLoading: () => dispatch(startLoading()),
  stopLoading: () => dispatch(stopLoading()),
});

export default connect(null, mdtp)(View);