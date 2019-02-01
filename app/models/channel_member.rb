class ChannelMember < ApplicationRecord
  validates :channel_id, :member_id, presence: true

  belongs_to :channel,
    foreign_key: :channel_id,
    class_name: :Channel

  belongs_to :member,
    foreign_key: :member_id,
    class_name: :User
end