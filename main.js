import { fetchUsers } from "./api.js";
import { renderUsers, showError } from "./dom.js";

async function init() {
  try {
    const users = await fetchUsers();
    renderUsers(users);
  } catch (err) {
    showError(err.message);
  }
}

init();
