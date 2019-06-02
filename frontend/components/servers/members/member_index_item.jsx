import React from 'react';
import { withRouter } from 'react-router';

const MemberIndexItem = ({ member }) => {
  return (
    <li className="server-member">
      <img src={window.minilogo} className="user-image" />
      <p>{member.username}</p>
    </li>
  );
}

export default withRouter(MemberIndexItem);