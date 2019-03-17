class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for 'chat_channel'
  end

  def speak(data)
    message = Message.create!(body: data['body'], author_id: data['author_id'], channel_id: data['channel_id'])
    socket = { 
      id: message.id,
      body: message.body,
      discord_id: message.discord_id,
      author_id: message.author_id,
      channel_id: message.channel_id,
      created_at: message.created_at
    }
    ChatChannel.broadcast_to('chat_channel', socket)
  end
  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
