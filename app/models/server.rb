# == Schema Information
#
# Table name: servers
#
#  id                 :bigint(8)        not null, primary key
#  admin_id           :integer          not null
#  name               :string           not null
#  image_url          :string
#  discord_id         :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  instant_invite     :string           not null
#  default_channel_id :string
#

class Server < ApplicationRecord
  validates :name, :discord_id, :instant_invite, :admin_id, presence: true
  validates :discord_id, :instant_invite, uniqueness: true


  after_initialize :generate_discord_id, :generate_instant_invite

  belongs_to :owner, 
    foreign_key: :admin_id,
    class_name: :User

  has_many :memberships,
    foreign_key: :server_id,
    class_name: :ServerMember,
    dependent: :destroy

  has_many :members,
    through: :memberships,
    source: :member,
    dependent: :destroy

  has_many :channels,
    foreign_key: :server_id,
    class_name: :Channel,
    dependent: :destroy

  private
  def generate_discord_id
    begin
      discord_id = "1" + 17.times.map{rand(10)}.join
    end while Server.where(discord_id: discord_id).exists?
    self.discord_id ||= discord_id
  end

  def generate_instant_invite
    range = [*'0'..'9',*'A'..'Z',*'a'..'z']
    begin
      instant_invite = Array.new(6){range.sample}.join
    end while Server.where(instant_invite: instant_invite).exists?
    self.instant_invite ||= instant_invite
  end

  # def generate_default_channel
  #   if self.id != 1
  #     channel = Channel.create!(name: "General", server_id: self.id)
  #     self.default_channel_id = channel.id
  #   end
  # end

end
