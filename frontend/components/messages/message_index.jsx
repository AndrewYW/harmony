import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { requestMessages,
  receiveMessage,
  createMessage,
} from '../../actions/message_actions';
import { requestChannel 
} from '../../actions/channel_actions';
import { requestUser } from '../../actions/user_actions';

import MessageForm from './message_form';
import MessageItem from './message_index_item';

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.bottom = React.createRef();
  }

  componentDidMount() {
    const receiveMessage = this.props.receiveMessage.bind(this);
    App.chatChannel = App.cable.subscriptions.create(
      { channel: "ChatChannel" },
      {
        received: data => {
          if (!users[data.author_id]) {
            this.props.fetchUser(data.author_id);
          }

          receiveMessage({
            id: data.id,
            body: data.body,
            author_id: data.author_id,
            discord_id: data.discord_id,
            created_at: data.created_at,
          })
        },
        speak: function(data) {
          return this.perform("speak", data);
        }
      }
    );

    this.props.requestMessages(this.props.match.params.channelId);

  }

  componentDidUpdate(oldProps) {
    if (this.props.match.params.channelId !== oldProps.match.params.channelId) {
      this.props.requestMessages(this.props.match.params.channelId);
    }
    this.bottom.current.scrollIntoView();

    if (this.props.history.location.state && this.props.history.location.state.message) {

      App.chat.speak({
        author_id: this.props.currentUserId,
        body: this.props.history.location.state.message,
        channel_id: this.props.channel.id,
      });
      this.props.history.location.state = undefined;
    }
  }

  renderMessages() {
    const messages = Object.values(this.props.messages);
    const blocks = [];
    let idx = 0;

    for(let i = 0; i < messages.length; i++) {
      if (!(messages[i+1] && messages[i].author_id === messages[i+1].author_id)) {
        idx++;
      }

      blocks[idx] ? blocks[idx].push(messages[i]) : blocks.push([messages[i]]);
    }

    return blocks.map((block, i) => (
      <MessageItem 
        key={i}
        messages={block}
      />
    ));
  }

  render() {
    return (
      <div className="message-block">
        <ul className="message-feed">
          { this.renderMessages() }
        </ul>
        <div ref={this.bottom} />
        <MessageForm 
          channel={this.props.channel}
          createMessage={this.props.createMessage}
          userId={this.props.currentUserId}
          />
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
  receiveMessage: message => dispatch(receiveMessage(message)),
  requestChannel: channelId => dispatch(requestChannel(channelId)),
  requestUser: userId => dispatch(requestUser(userId)),
})

export default withRouter(connect(mstp, mdtp)(MessageIndex))