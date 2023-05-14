import axios, { AxiosError } from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

interface LoginResponse {
  refresh: string;
  access: string;
}

interface ErrorData {
  error: string;
}

interface LoginResult {
  success: boolean;
  token?: string;
  message?: string;
}

function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError).isAxiosError !== undefined;
}

async function loginUser(userID: string, password: string): Promise<LoginResult> {
  try {
    const response = await axios.post<LoginResponse>(`${API_URL}/api/login/`, {
      userID,
      password,
    });

    if (response.status === 200) {
      const token = response.data.access;
      localStorage.setItem('token', token); // Store the token in local storage
      return { success: true, token };
    }
  } catch (error) {
    if (isAxiosError(error)) {
      return { success: false, message: (error.response?.data as ErrorData).error };
    }
    return { success: false, message: 'Unknown error occurred' };
  }
  return { success: false, message: 'Unexpected error occurred' };
}

export default loginUser;
