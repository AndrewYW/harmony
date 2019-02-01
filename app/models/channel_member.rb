# == Schema Information
#
# Table name: channel_members
#
#  id         :bigint(8)        not null, primary key
#  channel_id :integer          not null
#  member_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ChannelMember < ApplicationRecord
  validates :channel_id, :member_id, presence: true

  belongs_to :channel,
    foreign_key: :channel_id,
    class_name: :Channel

  belongs_to :member,
    foreign_key: :member_id,
    class_name: :User
end
