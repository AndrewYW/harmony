class ChangeDciToBeStringInServers < ActiveRecord::Migration[5.2]
  def change
    change_column :servers, :default_channel_id, :string
  end
end
