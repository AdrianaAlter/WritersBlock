class CreatePrizes < ActiveRecord::Migration
  def change
    create_table :prizes do |t|
      t.string :category
      t.integer :price
      t.string :name
    end
  end
end
