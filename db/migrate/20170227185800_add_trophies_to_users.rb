class AddTrophiesToUsers < ActiveRecord::Migration
  def change
    add_column :users, :trophies, :json, array: true, default: []
  end
end
