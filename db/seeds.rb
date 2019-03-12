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
Message.destroy_all
ChannelMessage.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

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
c1 = Channel.create!(name: "dinkleberg", server_id: (rand(2..3)))
c2 = Channel.create!(name: "donkleberg", server_id: (rand(2..3)))
Channel.create!(name: "testing test channel test", server_id: (rand(2..3)))
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

m1 = Message.create!(body: "test 1", channel_id: c1.id, author_id: demouser.id)
m3 = Message.create!(body: "test 3", channel_id: c1.id, author_id: demouser.id)
m2 = Message.create!(body: "test 2", channel_id: c2.id, author_id: demouser.id)

# ChannelMessage.create!(channel_id: c1.id, message_id: m1.id)
# ChannelMessage.create!(channel_id: c1.id, message_id: m3.id)
# ChannelMessage.create!(channel_id: c2.id, message_id: m2.id)