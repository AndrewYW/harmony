import React from 'react';
import { connect } from 'react-redux';
import { requestChannels, requestChannel } from '../../actions/channel_actions';

import ChannelIndex from './channel_index';

const mstp = ({session, entities}) => ({
  channels: entities.channels,
  userId: session.id,
});

const mdtp = dispatch => ({
  requestChannels: (serverId) => dispatch(requestChannels(serverId)),
  requestChannel: (channelId) => dispatch(requestChannel(channelId)),
});

export default connect(mstp, mdtp)(ChannelIndex);