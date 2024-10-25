import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import profileFetcher from '../../data/profileFetcher'; 

const ProfileDetail = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    profileFetcher.getProfile()
      .then((response) => setProfile(response))
      .catch((error) => console.error('Error fetching profile:', error));
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
<div className="profile-card">
  <div className="profile-header">
    <img src={`http://localhost:8000${profile.profile_photo}`} alt="Profile" />
    <div className="profile-info-column">
      <h1>{profile.display_name}</h1>
      <h2>{profile.username}</h2>
      <h3>{profile.role}</h3>
    </div>
  </div>
  
  <div className="profile-details-container">
    <div className="profile-info">
      <div className="detail-box">
        <p><strong>Email:</strong> {profile.email}</p>
      </div>
      <div className="detail-box">
        <p><strong>Bio:</strong> {profile.bio}</p>
      </div>
      <div className="detail-box">
      <p><strong>Member Since:</strong> {new Date(profile.date_joined).toLocaleDateString()}</p>
      </div>
    </div>
    
    <div className="button-container">
      <button onClick={() => navigate('/profile/edit')}>Edit Profile</button>
    </div>
  </div>
</div>




  
  );
};

export default ProfileDetail;
