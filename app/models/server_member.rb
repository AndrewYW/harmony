# == Schema Information
#
# Table name: server_members
#
#  id        :bigint(8)        not null, primary key
#  member_id :integer          not null
#  server_id :integer          not null
#

class ServerMember < ApplicationRecord

  validates :member_id, :server_id, presence: true

  belongs_to :member,
    foreign_key: :member_id,
    class_name: :User

  belongs_to :server,
      foreign_key: :server_id,
      class_name: :Server
end
