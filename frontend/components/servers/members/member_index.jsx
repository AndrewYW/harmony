import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { requestUsers } from '../../../actions/user_actions';

import MemberIndexItem from './member_index_item';

class MemberIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestUsers(this.props.match.params.serverId);
  }

  componentDidUpdate(oldProps) {
    if(this.props.match.params.serverId !== oldProps.match.params.serverId) {
      this.props.requestUsers(this.props.match.params.serverId);
    }
  }

  render() {
    const members = Object.values(this.props.members).map(member => {
      return (<MemberIndexItem key={member.id} member={member} />);
    });

    return (
      <div className="server-members">
        <div className="member-category">MEMBERS</div>
        <ul className="member-ul">
          {members}
        </ul>
      </div>
    );
  }
}

const mstp = state => ({
  members: Object.values(state.entities.users),
  server: state.ui.server,
});

const mdtp = dispatch => ({
  requestUsers: serverId => dispatch(requestUsers(serverId)),
});

export default withRouter(connect(mstp, mdtp)(MemberIndex));