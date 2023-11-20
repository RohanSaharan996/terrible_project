
import React from 'react';
import profileData from '../profile.json';
import './ProfileDesign.css'; // Create this CSS file for styling

const Profile = () => {
  const {
    name,
    username,
    bio,
    followers,
    following,
    posts,
    profileImage,
  } = profileData;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="profile-info">
          <h1>{name}</h1>
          <p>{username}</p>
          <p className="bio">{bio}</p>
          <div className="stats">
            <p>{followers} Followers</p>
            <p>{following} Following</p>
            <p>{posts} Posts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
