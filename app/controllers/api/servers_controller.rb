class Api::ServersController < ApplicationController

  def index
    @servers = current_user.servers
    render 'api/servers/index'
  end

  def show
    @server = current_user.servers.find(params[:id])
    render 'api/servers/show'
  end

  def create
    @server = Server.new(server_params)
    user = current_user
    @server.owner = user
    # @server.members << user
    if @server.save
      user.servers << @server
      user.save
      # default channel later
      render 'api/servers/show'
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def update
    @server = current_user.administrated_servers.find_by(discord_id: params[:discord_id])

    if @server.update(server_params)
      render 'api/servers/show'
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  # leave for later implementation
  def destroy
    @server = current_user.administrated_servers.find_by(discord_id: params[:discord_id])
    @server.destroy

    render 'api/servers/show'
  end

  private
  def server_params
    params.require(:server).permit(:name)
  end
end
