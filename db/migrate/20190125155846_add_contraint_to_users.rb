class AddContraintToUsers < ActiveRecord::Migration[5.2]
  def change
    change_table :users do |t|
      t.remove :discord_id
      t.column :discord_id, :string, null: false
      
    end
  end
end
