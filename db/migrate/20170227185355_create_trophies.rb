class CreateTrophies < ActiveRecord::Migration
  def change
    create_table :trophies do |t|
      t.string :trophy_name
      t.boolean :won, default: false
    end
  end
end
