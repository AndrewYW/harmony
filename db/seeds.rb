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

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

Faker::Config.random = Random.new(0)

admin = User.create({ username: "admin", password: "admin1", email: "admin@gmail.com", discriminator: "0000"})
demouser = User.create({username: "DemoUser", password: "demopassword", email: "demo@gmail.com", discriminator: "4321"})

home = Server.create({
  name: "Home",
  admin_id: admin.id,
  owner: admin,
  instant_invite: "abcdef"
})

admin.join_dm_server
demouser.join_dm_server

#Create Servers
4.times do
  server = Server.create({
    name: Faker::Games::Overwatch.unique.location,
    admin_id: demouser.id,
    owner: demouser,
  })

  ServerMember.create({
    member_id: demouser.id,
    server_id: server.id
  })
end

#OW Users
20.times do
  name = Faker::Games::Overwatch.unique.hero
  user = User.create({
    username: name,
    password: Faker::Internet.password,
    email: Faker::Internet.email(name),
  })
  user.join_dm_server

  # Every user joins the first server
  ServerMember.create({
    member_id: user.id,
    server_id: 2
  })

  # Join one of the other servers randomly
  ServerMember.create({
    member_id: user.id,
    server_id: rand(3..5)
  })
end

20.times do
  Channel.create({
    name: Faker::Games::Overwatch.unique.location,
    server_id: rand(2..5)
  })
end

300.times do
  msg = Message.create!({
    body: Faker::Games::Overwatch.quote,
    channel_id: rand(1..24),
    author_id: rand(3..22),
    # created_at: rand(2.years).seconds.ago,
  })
end
