import axios from 'axios';

export const axiosInstance = axios.create({
  // baseURL: 'https://bush-and-beach-travel.onrender.com',
  baseURL: 'http://[::1]:3000/',
  'Content-Type': 'application/json',

});

axiosInstance.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export const registerUser = async (data) => {
  const { name, email, password, password_confirmation } = data;
  console.log("saving data", data);
  return axiosInstance.post('/signup', {
    user: {
      name,
      email,
      password,
      password_confirmation,
      admin: true,
    },
  });
};

export const userLogin = (data) => axiosInstance.post('/login', { user: data });

export const userLogout = () => axiosInstance.delete('/logout');

export const currentUser = () => {
  const authToken = window.localStorage.getItem('authToken');
  if (!authToken) {
    return null;
  }
  return axiosInstance.get('/current_user', {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
};

