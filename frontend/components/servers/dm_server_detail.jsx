import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import UserBlurb from './user_blurb';
class DMServerDetail extends React.Component {
  componentDidMount() {
    // this.props.fetchServer(1);
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <section className="server-detail">
        <div className="channel-block">
          <div className="channel-header">FRIENDS</div>
          <div className="channel-list"></div>
          <UserBlurb />
        </div>
        <div className="content-block">
          <div className="content-header">
            <h1>MESSAGES</h1>
          </div>
          <div className="content">
            <div className="message-block">
              <div className="message-feed"></div>
              <div className="message-split"></div>
              <div className="message-input"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default withRouter(DMServerDetail);