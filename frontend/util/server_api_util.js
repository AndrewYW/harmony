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

