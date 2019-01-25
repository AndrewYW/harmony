json.user do 
  json.extract! user, :id, :username, :discriminator, :discord_id
  # json.image_url asset_path(user.image_url)
end


json.servers do 
  user.servers.each do |server|
    json.set! server.id do
      json.partial! 'api/servers/server.json', server: server
    end
  end
end