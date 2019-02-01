class CreateChannelMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :channel_members do |t|
      t.integer :channel_id, null: false
      t.integer :member_id, null: false

      t.timestamps
    end

    add_index :channel_members, [:channel_id, :member_id], unique: true
  end
end
