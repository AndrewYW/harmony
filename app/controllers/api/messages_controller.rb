class Api::MessagesController < ApplicationController

  def index
    @channel = Channel.includes(:messages).find_by(discord_id: params[:discord_id])
    # debugger

    if @channel
      @messages = @channel.messages.includes(:author).order("created_at DESC")
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

  def show
    @message = Message.find_by(discord_id: params[:id])
  end

  def destroy
    @message = Message.find_by(discord_id: params[:id])

    if @message.delete
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  private
  def message_params
    params.require(:message).permit(:body, :channel_id)
  end
end
