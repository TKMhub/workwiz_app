import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000", // Djangoの開発サーバーのURLを指定してください
});

export async function login(username:string, password:string) {
  try {
    const response = await apiClient.post("/api/token/", {
      username: username,
      password: password,
    });

    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
}

export async function get_nickname(token:any) {
  try {
    const response = await apiClient.get("/api/nickname/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Failed to get nickname:", error);
    throw error;
  }
}
