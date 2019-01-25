export const fetchServers = () => (
  $.ajax({
    method: "GET",
    url: '/api/servers'
  })
)

export const createServer = server => (
  $.ajax({
    method: "POST",
    url: "/api/servers",
    data: server
  })
)

