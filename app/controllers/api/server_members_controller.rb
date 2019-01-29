class Api::ServerMembersController < ApplicationController

  def create
    @server = Server.find_by(discord_id: params[:discord_id])
    if @server
      current_user.servers << @server
      render 'api/servers/server', server: @server
    else
      render json: ['Server does not exist'], status: 404
    end
  end

  def destroy

  end
end
