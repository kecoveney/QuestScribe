import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import profileFetcher from '../../data/profileFetcher';

const ProfileEdit = () => {
  const [displayName, setDisplayName] = useState('');
  const [bio, setBio] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [role, setRole] = useState('reader'); // Default role
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    profileFetcher.getProfile()
      .then((response) => {
        setDisplayName(response.display_name);
        setBio(response.bio);
        setRole(response.role); // Set the initial role from the fetched profile
      })
      .catch((error) => console.error('Error fetching profile:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('display_name', displayName);
    formData.append('bio', bio);
    formData.append('role', role); // Append the selected role

    if (profilePhoto) {
      formData.append('profile_photo', profilePhoto);
    }

    profileFetcher.updateProfile(formData)
      .then(() => {
        alert('Profile updated successfully!');
        navigate('/profile'); // Redirect to the profile page after update
      })
      .catch(() => alert('Profile update failed'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Display Name</label>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Bio</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Profile Photo</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setProfilePhoto(e.target.files[0])}
        />
      </div>
      <div>
        <label>Role</label>
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="reader">Reader</option>
          <option value="adventurer">Adventurer</option>
        </select>
      </div>
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default ProfileEdit;
