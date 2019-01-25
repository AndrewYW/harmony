# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Server.delete_all
User.create!({username: "admin", password: "admin1", email: "admin", discriminator: "1234"})
User.create!({username: "123456", password: "123456", email: "123456", discriminator: "1234"})
User.create!({username: "demouser", password: "demopassword", email: "demoemail", discriminator: "1111"})


dms = Server.create!({
  name: "dm_server",
  admin_id: User.where(username: "admin").first.id
})

# dms.members << User.first
# dms.save!