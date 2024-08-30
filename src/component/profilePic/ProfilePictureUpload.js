import React, { useState } from 'react';
import "./ProfilePictureUpload.css"

function ProfilePictureUpload({ onChange }) {
  const defaultImageUrl = 'https://media.istockphoto.com/id/499601050/photo/female-avatar-profile-picture-silhouette-light-shadow.jpg?s=612x612&w=0&k=20&c=XjoX0b7dP1-lE5Oy4mymbFFGBUrMXbnzHiLrUT21lz4=';
  const [preview, setPreview] = useState(defaultImageUrl);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onChange(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(defaultImageUrl);
    }
  };

  return (
    <div>
      <label>Profile Picture</label>
      <img src={preview} alt="Profile Preview" className="profile-picture" />
      <input type="file" onChange={handleFileChange} />
      
    </div>
  );
}

export default ProfilePictureUpload;