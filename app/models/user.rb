# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  discriminator   :string           not null
#  image_url       :string
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  discord_id      :string           not null
#

class User < ApplicationRecord
  validates :session_token, :discord_id, :email, uniqueness: true
  validates :username, :discriminator, :discord_id, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password

  after_initialize :ensure_session_token, :generate_discord_id, :generate_discriminator

  has_many :administrated_servers,
    foreign_key: :admin_id,
    class_name: :Server,
    dependent: :destroy

  has_many :server_memberships,
    foreign_key: :member_id,
    class_name: :ServerMember

  has_many :channel_memberships,
    foreign_key: :member_id,
    class_name: :ChannelMember

  has_many :servers,
    through: :server_memberships,
    source: :server
  
  has_many :channels,
    through: :channel_memberships,
    source: :channel


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

  def generate_discord_id
    begin
      discord_id = "0" + 17.times.map{rand(10)}.join
    end while User.where(discord_id: discord_id).exists?
    self.discord_id ||= discord_id
  end

  def generate_discriminator
    self.discriminator ||= 4.times.map{rand(10)}.join
  end
end
