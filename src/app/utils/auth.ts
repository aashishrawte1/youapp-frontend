import api from './api';

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data;
  } catch (error:any) {
    throw new Error(error.response?.data.message || 'Login failed');
  }
};

export const registerUser = async (email: string, username: string, password: string) => {
    try {
      const response = await api.post('/register', { email, username, password });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data.message || 'Registration failed');
    }
  };

export const updateUserProfile = async (name: string, bio: string) => {
  try {
    const response = await api.put('/profile', { name, bio });
    // Handle successful profile update (e.g., show success message)
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Update failed');
  }
};
