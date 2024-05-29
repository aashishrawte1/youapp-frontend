import api from './api';

export const loginUser = async (username: string, password: string) => {
  try {
    const response = await api.post('/login', { username, password });
    localStorage.setItem('user_data', JSON.stringify(response.data));
    return true;
  } catch (error:any) {
    throw new Error(error.response?.data.message || 'Login failed');
  }
};

export const registerUser = async (email: string, username: string, password: string) => {
    try {
      const response = await api.post('/register', { email, username, password });
      localStorage.setItem('user_data', JSON.stringify(response?.data));
      return response.status == 201;
    } catch (error: any) {
      throw new Error(error.response?.data.message || 'Registration failed');
    }
  };

export const updateUserProfile = async (name: string, bio: string) => {
  try {
    const response = await api.put('/updateProfile', { name, bio });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Update failed');
  }
};

export const createProfile = async (displayName: string, gender: string, dob: string, horoscope: string, zodiac: string, height: string, weight: string, interests: object) => {
  try {
    const token = localStorage.getItem('user_data');
    const parsedToken = JSON.parse(token != null ? token : '').accessToken;
    const response = await api.post(
      '/createProfile', 
      { displayName, gender, dob, height, weight, interests },
      {
        headers: {
          Authorization: `Bearer ${parsedToken}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error: any) {
    // throw new Error(error.response?.data.message || 'Creation failed');
  }
}

export const getProfile = async () => {
  try {
    const token = localStorage.getItem('user_data');
    const parsedToken = JSON.parse(token != null ? token : '').accessToken;
    const response = await api.get(
      '/getProfile', 
      {
        headers: {
          Authorization: `Bearer ${parsedToken}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error: any) {
    // throw new Error(error.response?.data.message || 'Creation failed');
  }
}



