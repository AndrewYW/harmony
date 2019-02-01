class Api::ServerMembersController < ApplicationController

  def create
    @server = Server.find_by(instant_invite: params[:instant_invite])
    if @server
      current_user.servers << @server
      render 'api/servers/show', server: @server
    else
      render json: ['Server does not exist'], status: 404
    end
  end

  def destroy

  end
end
