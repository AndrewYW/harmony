import React from 'react';
import { connect } from 'react-redux';

const UserBlurb = ({ currentUser }) => {
  return (
    <div className="user-blurb">
      <div className="user-info">
        <h1>{currentUser.username}</h1>
        <h2>{currentUser.discriminator}</h2>
      </div>
    </div>
  )
};

const mstp = state => ({
  currentUser: state.entities.users[state.session.id],
})

export default connect(mstp)(UserBlurb);