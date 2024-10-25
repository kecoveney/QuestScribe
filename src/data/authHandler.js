import { fetchWithResponse } from './fetcher';

export function login(user) {
  return fetchWithResponse('api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(response => {
    if (response.token) {
      localStorage.setItem('token', response.token);  // Save token to local storage
    }
    return response;
  });
}

export function register(user) {
    return fetchWithResponse('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
  }
  
export function getUserProfile() {
  return fetchWithResponse('api/profile', {
    headers: {
      'Authorization': `Token ${localStorage.getItem('token')}`,  // Fetch token from local storage
      'Content-Type': 'application/json'
    }
  });
}

export function logout() {
  return fetchWithResponse('api/logout', {
    method: 'POST',
    headers: {
      'Authorization': `Token ${localStorage.getItem('token')}`
    }
  })
  .then(() => {
    localStorage.removeItem('token');
  });
}
