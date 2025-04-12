export async function fetchUsers() {
  const endpoint = "https://jsonplaceholder.typicode.com/users";

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error("Failed to fetch users: " + error.message);
  }
}
