# json.partial! "api/users/user", user: @user

json.extract! @user, :id, :username, :discriminator, :discord_id