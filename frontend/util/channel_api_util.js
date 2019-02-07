export const fetchChannels = server_id => (
  $.ajax({
    method: 'GET',
    url: '/api/channels',
    data: { server_id }
  })
)

export const fetchChannel = id => (
  $.ajax({
    method: "GET",
    url: `/api/channels/${id}`
  })
)

//takes name and server_id
export const createChannel = channel => (
  $.ajax({
    method: "POST",
    url: '/api/channels',
    data: { channel }
  })
)

export const updateChannel = channel => (
  $.ajax({
    method: "POST",
    url: `/api/channels/${channel.id}`,
    data: { channel }
  })
)

export const deleteChannel = id => (
  $.ajax({
    method: "DELETE",
    url: `/api/channels/${id}`
  })
)