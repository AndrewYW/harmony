class AddDefaultChannelIdToServers < ActiveRecord::Migration[5.2]
  def change
    add_column :servers, :default_channel_id, :integer
  end
end
