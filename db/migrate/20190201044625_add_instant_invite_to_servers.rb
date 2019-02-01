class AddInstantInviteToServers < ActiveRecord::Migration[5.2]
  def change
    add_column :servers, :instant_invite, :string, null: false
  end
end
