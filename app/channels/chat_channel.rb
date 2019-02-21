class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for 'chat_channel'
  end

  def speak(date)
    message = Message.create(body: data['message'], author_id: data['author_id'], channel_id: data['channel_id'])
    socket = { message: message.body,
      author: message.author,
      channel: message.channel,
      created_at: message.created_at
    }

    ChatChannel.broadcast_to('chat_channel', socket)
  end
  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
