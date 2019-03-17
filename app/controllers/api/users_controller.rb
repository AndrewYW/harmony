class Api::UsersController < ApplicationController
  
  def index
    # debugger
    @server = Server.includes(:members).find_by(discord_id: params[:server_id])
    @users = @server.members
    render "api/users/index"
  end
  
  def create
    @user = User.new(user_params)

    if @user.save
      @user.servers << Server.find(1)
      @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(update_user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end
  
  private
  def user_params
    params.require(:user).permit(:username, :password, :email)
  end

  def update_user_params
    params.require(:user).permit(:username, :discriminator)
  end
end
