# == Schema Information
#
# Table name: channel_messages
#
#  id         :bigint(8)        not null, primary key
#  channel_id :integer          not null
#  message_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ChannelMessage < ApplicationRecord
  validates :channel_id, :message_id, presence: true

  belongs_to :channel,
    foreign_key: :channel_id,
    class_name: :Channel
  
  belongs_to :message,
    foreign_key: :message_id,
    class_name: :Message
end
