class CreateServerMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :server_members do |t|
      t.integer :member_id, null: false
      t.integer :server_id, null: false
    end
    add_index :server_members, [:member_id, :server_id], unique: true
  end
end
