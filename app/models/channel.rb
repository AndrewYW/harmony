# == Schema Information
#
# Table name: channels
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  discord_id :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  server_id  :integer          not null
#

class Channel < ApplicationRecord
  validates :name, :discord_id, :server_id, presence: true
  validates :discord_id, uniqueness: true

  after_initialize :generate_discord_id

  belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server

  has_many :memberships,
    foreign_key: :member_id,
    class_name: :ChannelMember

  has_many :members,
    through: :memberships,
    source: :member

  has_many :messages,
    foreign_key: :channel_id,
    class_name: :Message

  private
  def generate_discord_id
    begin
      discord_id = "2" + 17.times.map{rand(10)}.join
    end while Server.where(discord_id: discord_id).exists?
    self.discord_id ||= discord_id
  end

end
