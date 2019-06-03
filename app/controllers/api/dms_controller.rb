class Api::DmsController < ApplicationController

  def index
    # @server = Server.includes(:channels).first
    # @dms = @server.channels.order("updated_at DESC")
  end

  def create
    # if params[:channel_exists]
    #   @message = Message.new()
    # else
    #   @channel = Channel.create_dm_channel(current_user, User.find_by(discord_id: dm_params[:recipient_id]))

    #   if @channel.save
    #     render :show
    #   else
    #     render json: @channel.errors.full_messages, status: 422
    #   end
    # end
    
  end

  def show
    # @channel = Channel.find_by(discord_id: )
  end

  def destroy

  end

  private
  def dm_params
    params.require([:message, :metadata]).permit(:body, :channel_id, :recipient_id )
  end
end


