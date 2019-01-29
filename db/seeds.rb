# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Server.delete_all
ServerMember.delete_all
admin = User.new({ username: "admin", password: "admin1", email: "admin", discriminator: "1234"})
tester = User.new({username: "123456", password: "123456", email: "123456", discriminator: "1234"})
demouser = User.new({username: "demouser", password: "demopassword", email: "demoemail", discriminator: "1111"})

admin.save!
tester.save!
demouser.save!

home = Server.new({
  name: "Home",
  admin_id: admin.id,
  owner: admin
})

server1 = Server.new({
  name: "server 1",
  admin_id: demouser.id,
  owner: demouser
})

home.save!
server1.save!

admin.servers += [home, server1]
tester.servers += [home]
demouser.servers += [home, server1]

admin.save!
tester.save!
demouser.save!
home.save!
server1.save!