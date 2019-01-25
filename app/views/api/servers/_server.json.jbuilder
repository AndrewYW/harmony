json.servers do 
  json.extract! server, :name, :admin_id, :discord_id
  # json.image_url asset_path(server.image_url)
end

json.members do 
  server.members.each do |member|
    json.set! member.id do 
      json.partial! 'api/users/user', user: user
    end
  end
end