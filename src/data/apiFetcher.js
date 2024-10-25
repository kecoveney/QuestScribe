import axios from 'axios';

const apiFetcher = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fetch tags
export const fetchTags = async () => {
  const token = localStorage.getItem('token'); // Fetch the auth token
  const response = await apiFetcher.get('/tags', {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return response.data;
};

// Other existing functions (like create journal, etc.)





// Add a request interceptor to include the token
apiFetcher.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }
  return config;
});

export default apiFetcher;