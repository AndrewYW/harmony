# == Schema Information
#
# Table name: messages
#
#  id         :bigint(8)        not null, primary key
#  body       :text             not null
#  discord_id :string           not null
#  author_id  :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord
  validates :body, :discord_id, :author_id, :channel_id, presence: true,
  validates :discord_id, uniqueness: true

  after_initialize :generate_discord_id


  belongs_to :author,
    foreign_key: author_id,
    class_name: :User

  belongs_to :channel,
    foreign_key: :channel_id,
    class_name: :Channel
  private
  def generate_discord_id
    begin
      discord_id = "3" + 17.times.map{rand(10)}.join
    end while Message.where(discord_id: discord_id).exists?
    self.discord_id ||= discord_id
  end
end
