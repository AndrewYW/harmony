class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.string :discord_id, null: false
      
      t.timestamps
    end

    add_index :channels, :discord_id, unique: true
  end
end
