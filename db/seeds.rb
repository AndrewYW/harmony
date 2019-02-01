# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Server.destroy_all
ServerMember.destroy_all
Channel.destroy_all
ChannelMember.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('servers')
ActiveRecord::Base.connection.reset_pk_sequence!('server_members')
ActiveRecord::Base.connection.reset_pk_sequence!('channels')
ActiveRecord::Base.connection.reset_pk_sequence!('channel_members')
admin = User.new({ username: "admin", password: "admin1", email: "admin", discriminator: "1234"})
tester = User.new({username: "123456", password: "123456", email: "123456", discriminator: "1234"})
demouser = User.new({username: "demouser", password: "demopassword", email: "demoemail", discriminator: "1111"})

admin.save!
tester.save!
demouser.save!

home = Server.new({
  name: "Home",
  admin_id: admin.id,
  owner: admin,
  instant_invite: "9NMvjd"
})

server1 = Server.new({
  name: "server 1",
  admin_id: demouser.id,
  owner: demouser,
  instant_invite: "vfRy5u"
})

server2 = Server.new({
  name: "server 2",
  admin_id: demouser.id,
  owner: demouser,
  instant_invite: "FNW2wn"
})

home.save!
server1.save!
server2.save!

Server.all.each do |server|
  if server.id != 1
    channel = Channel.create!(name: "General", server_id: server.id)
    server.default_channel_id = channel.discord_id
    server.save
  end
end
User.all.each do |user|
  user.servers << home
  user.save!
end

Channel.create!(name: "asdfljkwefjkl", server_id: (rand(2..3)))
Channel.create!(name: "dinkleberg", server_id: (rand(2..3)))
Channel.create!(name: "donkleberg", server_id: (rand(2..3)))
Channel.create!(name: "yargleblarg", server_id: (rand(2..3)))
Channel.create!(name: "bojangles", server_id: (rand(2..3)))
Channel.create!(name: "terry crews", server_id: (rand(2..3)))
Channel.create!(name: "lorem ipsum", server_id: (rand(2..3)))
Channel.create!(name: "thrhgfchfh", server_id: (rand(2..3)))
admin.servers += [server1]
demouser.servers += [server1, server2]

admin.save!
tester.save!
demouser.save!
home.save!
server1.save!
server2.save!