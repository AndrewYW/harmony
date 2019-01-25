class Api::ServersController < ApplicationController

  def index
    @servers = current_user.servers
    render 'api/servers/index'
  end

  def show
    @server = current_user.find(params[:id])
    render 'api/servers/show'
  end

  def create
    @server = Server.new(server_params)
    @server.owner = current_user
    @server.members << current_user
    if @server.save
      current_user.servers << @server
      current_user.save
      # add current server to user servers'
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


  def destroy
    @server =
  end

  private
  def server_params
    params.require(:server).permit(:name)
  end
end
