# HARMONY

 Harmony is a full stack clone of Discord, a popular free voice and text chat multiplatform service. First released in 2015, Discord improved on elements of older VoIP applications such as TeamSpeak and Mumble, implementing a more modern UI, as well as simpler setup for users, reminiscent of Skype.

 ## [Visit Harmony](https://harmony-rb.herokuapp.com/#/)

## It's time to ditch Discord
<!-- Discussion of tech used -->
### Technology

Harmony is implemented with a Ruby on Rails backend, and React/Redux frontend. AJAX requests to the PostgreSQL database are filtered using [Jbuilder](https://github.com/rails/jbuilder), and rendered using the standard React/Redux lifecycle. 

Chat messages are managed through Action Cable, the RTC websocket framework packaged with Rails.

Voice channels are managed through WebRTC.

<!-- 2 feature focus -->
#### Discord IDs

Discord entities (users, servers, channels, messages, etc.) all have a `discord_id` property, a unique 18 digit unsigned integer. For all intents and purposes, it functions as a table agnostic primary key, so that entities can change their other attributes like name and discriminator (a 4 digit number randomly assigned to users), as well as several other features, such as mentions, and Discord bot event handling. It is also present in the web application version for frontend routing. To ensure uniqueness across all entities, Discord uses Twitter's [Snowflake algorithm](https://developer.twitter.com/en/docs/basics/twitter-ids.html), which generates 64-bit time based unsigned integers.

In Harmony, `discord_id`'s are implemented in a more simplistic manner. Due to database constraints, the values are stored as strings, while each number in the 18 digit string other than the first is generated using the `rand` function. The first digit is assigned `0` for `User` models, `1` for `Server` models, and so on, for the sake of easy visual recognition. Although this increases the chances of a collision to one in 100 quadrillion, the number of entities in Harmony is small enough for it to be inconsequential. Later refactors will implement the Snowflake algorithm.

All `discord_id`s are indexed, as they are used more often than even the primary keys in most tables.
<!-- Code Snippets -->

### `discord_id` implementation for `User` model
------

```Ruby
class User < ApplicationRecord
  validates :discord_id, presence: true, uniqueness: true
  ...
  after_initialize :generate_discord_id
  ...

  def generate_discord_id
    begin
      discord_id = "0" + 17.times.map{rand(10)}.join
    end while User.where(discord_id: discord_id).exists?
    self.discord_id ||= discord_id
  end

end
```

## Useful Links

+ [Discord Developer Documentation](https://discordapp.com/developers/docs/intro)
+ [discordrb](https://github.com/meew0/discordrb), a Ruby implementation for the official Discord API.
+ [Official Discord API Server](https://discordapp.com/invite/discord-API): Features channels for all the most popular API wrappers, as well as discussions on making Discord bots and general help.