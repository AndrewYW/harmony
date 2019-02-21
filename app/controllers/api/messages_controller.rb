class Api::MessagesController < ApplicationController

  def index
    @channel = Channel.find_by(discord_id: params[:channel_id])

    if @channel
      @messages = @channel.messages.order("created_at DESC")
      render :index
    else
      render json: ["Channel doesn't exist"], status: 404
    end
  end

  def create
    @message = Message.new(message_params)
    @message.author = current_user

    if @message.save
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def delete

  end

  private
  def message_params
    params.require(:message).permit(:body, :channel_id)
  end
end
