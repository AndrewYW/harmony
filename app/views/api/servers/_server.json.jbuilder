
  json.extract! server, :id, :name, :admin_id, :discord_id, :default_channel_id, :instant_invite
  # json.image_url asset_path(server.image_url)


# json.members do 
#   server.members.each do |member|
#     json.set! member.id do 
#       json.partial! 'api/users/user', user: member
#     end
#   end
# end