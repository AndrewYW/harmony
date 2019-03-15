export const editUser = user => (
  $.ajax({
    method: "PATCH",
    url: `api/users/${user.id}`,
    data: user
  })
)

export const fetchUser = discord_id => (
  $.ajax({
    method: "GET",
    url: `api/users/${discord_id}`
  })
);

export const fetchUsers = server_id => (
  $.ajax({
    method: "GET",
    url: `api/users`,
    data: { server_id }
  })
);