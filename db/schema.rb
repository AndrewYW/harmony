# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_01_25_155846) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "server_members", force: :cascade do |t|
    t.integer "member_id", null: false
    t.integer "server_id", null: false
    t.index ["member_id", "server_id"], name: "index_server_members_on_member_id_and_server_id", unique: true
  end

  create_table "servers", force: :cascade do |t|
    t.integer "admin_id", null: false
    t.string "name", null: false
    t.string "image_url"
    t.string "discord_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "discriminator", null: false
    t.string "image_url"
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "discord_id", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username", "discriminator"], name: "index_users_on_username_and_discriminator", unique: true
  end

end
