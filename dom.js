export function renderUsers(users) {
  const userList = document.getElementById("userList");
  userList.innerHTML = "";

  users.map(user => {
    const li = document.createElement("li");
    li.textContent = user.name;
    userList.appendChild(li);
  });
}

export function showError(message) {
  const userList = document.getElementById("userList");
  userList.innerHTML = `<li class="error">${message}</li>`;
}
