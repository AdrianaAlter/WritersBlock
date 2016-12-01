# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20161130221803) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "hstore"

  create_table "prizes", force: :cascade do |t|
    t.string  "category"
    t.integer "price"
    t.string  "name"
    t.boolean "new",      default: true
  end

  create_table "projects", force: :cascade do |t|
    t.string   "title"
    t.text     "body"
    t.integer  "count"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: :cascade do |t|
    t.string  "user_name",                    null: false
    t.string  "password_digest",              null: false
    t.string  "session_token",                null: false
    t.integer "points",          default: 0
    t.json    "prizes",          default: [],              array: true
    t.hstore  "settings",        default: {}
  end

end