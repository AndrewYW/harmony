export const fetchServers = () => (
  $.ajax({
    method: "GET",
    url: '/api/servers'
  })
)

export const fetchServer = id => (
  $.ajax({
    method: "GET",
    url: `/api/servers/${id}`
  })
)

export const createServer = server => (
  $.ajax({
    method: "POST",
    url: "/api/servers",
    data: {server}
  })
)

export const updateServer = server => (
  $.ajax({
    method: "PATCH",
    url: `api/servers/${server.id}`,
    data: { server }
  })
)

export const joinServer = instant_invite => (
  $.ajax({
    method: "POST",
    url: `api/server_members/`,
    data: { instant_invite }
  })
)