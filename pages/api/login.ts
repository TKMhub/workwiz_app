import axios, { AxiosError } from 'axios';

interface LoginResponse {
  token: string;
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
    const response = await axios.post<LoginResponse>('http://127.0.0.1:8000/api/login/', {
      userID,
      password,
    });

    if (response.status === 200) {
      const { token } = response.data;
      localStorage.setItem('jwtToken', token);
      // トークンを保存し、ログイン状態を管理します（localStorageやCookieなど）
      // トークンを保存し、ログイン状態を管理します（localStorageやCookieなど）
      // トークンを保存し、ログイン状態を管理します（localStorageやCookieなど）
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
