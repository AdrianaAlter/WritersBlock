class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title
      t.text :body
      t.integer :count
      t.integer :user_id
      t.timestamps
    end
  end
end
