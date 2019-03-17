import React from 'react';
import * as moment from 'moment';

const MessageItem = ({ message, users }) => {
  const mapMessage = (line, i) => {
    return (
      <li key={i}>
        { line.body }
      </li>
    )
  };

  const messageBlock = message.map((line, i) => mapMessage(line, i));

  if(users[message[0].author_id]) {
    return (
      <li className="message-item">
        <img src={window.minilogo}/>
        <header>
          <h1>{ users[message[0].author_id].username }</h1>
          <span>{ moment(message[0].created_at).calendar() }</span>
        </header>
        <ul>
          { messageBlock }
        </ul>
        <hr className="message-split"/>
      </li>
    )
  } else {
    return null;
  }
}

export default MessageItem;