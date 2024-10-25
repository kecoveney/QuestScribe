import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../data/authHandler';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Use this for redirection

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, password };

    login(user)
      .then((response) => {
        if (response.token) {
          alert('Login successful!');
          localStorage.setItem('token', response.token);  // Save token
          navigate('/');  // Redirect to home page
        } else {
          alert('Login failed');
        }
      })
      .catch((error) => alert('Error logging in'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
