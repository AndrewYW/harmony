class AddServerIdToChannels < ActiveRecord::Migration[5.2]
  def change
    add_column :channels, :server_id, :integer, null: false
  end
end
