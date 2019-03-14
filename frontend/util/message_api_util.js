export const fetchMessages = channelId =>  (
  $.ajax({
    method: 'GET',
    url: '/api/channels',
    data: { discord_id: channelId }
  })
)

export const fetchMessage = discord_id => (
  $.ajax({
    method: "GET",
    url: `/api/messages/${discord_id}`
  })
)

export const createMessage = message => (
  $.ajax({
    method: "POST",
    url: `/api/messages/`,
    data: { message }
  })
)

export const updateMessage = message => (
  $.ajax({
    method: "POST",
    url: `/api/messages/${message.discord_id}`,
    data: { message }
  })
)

export const deleteMessage = discord_id => (
  $.ajax({
    method: "DELETE",
    url: `/api/messages/${discord_id}`
  })
)