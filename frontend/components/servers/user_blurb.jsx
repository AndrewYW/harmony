import React from 'react';
import { connect } from 'react-redux';

const UserBlurb = ({ user }) => {
  return (
    <div className="user-blurb">
      <div className="user-info">
        <h1>{user.username}</h1>
        <h2>{user.discriminator}</h2>
      </div>
    </div>
  )
};

const mstp = state => ({
  user: state.entities.users[state.session.id],
})

export default connect(mstp)(UserBlurb);