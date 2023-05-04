import axios from "axios";

export async function login(username:any, password:any) {
  try {
    const response = await axios.post("/api/token/", {
      username: username,
      password: password,
    });

    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
}
