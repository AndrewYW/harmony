import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { requestMessages,
  requestMessage,
  createMessage,
} from '../../actions/message_actions';
import { requestChannel 
} from '../../actions/channel_actions';

import MessageForm from './message_form';
import MessageIndexItem from './message_index_item';

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.bottom = React.createRef();
  }

  componentDidMount() {
    
    App.chatChannel = App.cable.subscriptions.create(
      { channel: "ChatChannel" },
      {
        received: data => {
          if (!users[data.author_id]) {
            
          }
        },
        speak: function(data) {
          return this.perform("speak", data);
        }
      }
    );

    this.props.requestMessages(this.props.match.params.channelId);
    // this.props.requestChannel(this.props.match.params.channelId);

  }

  componentDidUpdate(oldProps) {
    if (this.props.match.params.channelId !== oldProps.match.params.channelId) {
      this.props.requestMessages(this.props.match.params.channelId);
      // this.props.requestChannel(this.props.match.params.channelId);
    }
    this.bottom.current.scrollIntoView();
  }

  render() {
    return (
      <div className="message-block">
        <ul className="message-index">
          <div ref={this.bottom} />
        </ul>
        {/* <MessageForm /> */}
      </div>
    )
  }
}

const mstp = state => ({
  messages: state.entities.messages,
  users: state.entities.users,
  channel: state.ui.channel,
  currentUserId: state.session.id,
});

const mdtp = dispatch => ({
  requestMessages: channelId => dispatch(requestMessages(channelId)),
  createMessage: message => dispatch(createMessage(message)),
  requestMessage: messageId => dispatch(requestMessage(messageId)),
  requestChannel: channelId => dispatch(requestChannel(channelId)),
})

export default withRouter(connect(mstp, mdtp)(MessageIndex))