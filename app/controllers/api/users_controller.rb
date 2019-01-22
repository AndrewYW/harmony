class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params.merge(random_discriminator))

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update

  end
  
  private
  def user_params
    params.require(:user).permit(:username, :password, :email)
  end

  def random_discriminator
    {discriminator: 4.times.map{rand(10)}.join}
  end
end
