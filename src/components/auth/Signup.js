import React, { useState } from 'react';
import { register } from '../../data/authHandler';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');  // Added first name field
  const [lastName, setLastName] = useState('');    // Added last name field

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { 
      username, 
      email, 
      password, 
      first_name: firstName,  // Ensure first name is sent in the payload
      last_name: lastName     // Ensure last name is sent in the payload
    };

    register(user)
      .then((response) => {
        alert('Registration successful!');
      })
      .catch((error) => alert('Error during registration: ' + error.message));
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
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      <div>
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}  // Added first name input
          required
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}   // Added last name input
          required
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
