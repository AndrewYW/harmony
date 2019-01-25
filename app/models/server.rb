# == Schema Information
#
# Table name: servers
#
#  id         :bigint(8)        not null, primary key
#  admin_id   :integer          not null
#  name       :string           not null
#  image_url  :string
#  discord_id :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Server < ApplicationRecord
  validates :name, :discord_id, :admin_id, presence: true
  validates :discord_id, uniqueness: true
  after_initialize :generate_discord_id

  belongs_to :owner, 
    foreign_key: :admin_id,
    class_name: :User

  has_many :memberships,
    foreign_key: :server_id,
    class_name: :ServerMember

  has_many :members,
    through: :memberships,
    source: :member

  
  def generate_discord_id
    begin
      discord_id = "1" + 17.times.map{rand(10)}.join
    end while Server.where(discord_id: discord_id).exists?
    self.discord_id ||= discord_id
  end

end
