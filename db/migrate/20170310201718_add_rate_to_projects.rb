class AddRateToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :rate, :integer, default: 10
  end
end
