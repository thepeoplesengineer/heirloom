interface LoginCredentials {
    email: string;
    password: string;
  }
  
  interface RegisterData {
    username: string;
    email: string;
    password: string;
  }
  
  const API_URL = import.meta.env.VITE_API_URL;
  
  export const loginUser = async (credentials: LoginCredentials) => {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
  
    if (!response.ok) {
      throw new Error('Failed to login');
    }
  
    const data = await response.json();
    localStorage.setItem('token', data.token); 
    return data;
  };
  
  
  // Register User
export const registerUser = async (credentials: RegisterData): Promise<void> => {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
  
    if (!response.ok) {
      throw new Error('Failed to register');
    }
  };