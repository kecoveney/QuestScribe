import React, { useEffect, useState } from 'react';
import apiFetcher from '../data/apiFetcher'; 
import { Link } from 'react-router-dom'; 


const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await apiFetcher.get('/users/'); // Fetch users from your API
        setUsers(response.data);
      } catch (err) {
        setError('Error fetching users');
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div className="user-list-container">
      <h2>User List</h2>
      <div className="user-cards">
        {users.map(user => (
          <div className="user-card" key={user.id}>
            <h3>{user.username}</h3>
            <p>Email: {user.email}</p>
            <Link to={`/profile/${user.id}`} className="view-profile-button">View Profile</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
