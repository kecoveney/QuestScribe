// profileFetcher.js
import apiFetcher from './apiFetcher'; // This is your axios instance

export const getProfile = async () => {
  const response = await apiFetcher.get('/profile', {
    headers: { Authorization: `Token ${localStorage.getItem('token')}` },
  });
  return response.data;
};

export const getProfileById = async (id) => {
  const response = await apiFetcher.get(`/profile/${id}/`, {
    headers: { Authorization: `Token ${localStorage.getItem('token')}` },
  });
  return response.data;
};

export const updateProfile = async (profileData) => {
  const response = await apiFetcher.patch('/profile', profileData, {
    headers: { 
      Authorization: `Token ${localStorage.getItem('token')}`,
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

const profileFetcher = {
  getProfile,
  getProfileById, // Add this line
  updateProfile,
};

export default profileFetcher;
