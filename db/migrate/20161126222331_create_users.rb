class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :user_name, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.integer :points, default: 0
      t.json :prizes, array: true, default: []
      t.json :used, array: true, default: []
      t.hstore :settings, default: {}
    end
  end
end
