class Api::ChannelsController < ApplicationController

  def index
    # debugger
    @server = current_user.servers.find_by(discord_id: params[:server_id])
    @channels = @server.channels
  end

  def show  
    @channel = Channel.find(params[:id])
  end

  def update

  end

  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      @server = Server.find(params[:channel][:server_id])

    else
      render json: @channel.errors, status: 422
    end
  end

  def destroy

  end

  private
  def channel_params
    params.require(:channel).permit(:name, :server_id)
  end
end
