class Api::UsersController < ApplicationController
  def create

  end

  private
  def user_params
    params.require(:user).permit(:username)
  end
end
