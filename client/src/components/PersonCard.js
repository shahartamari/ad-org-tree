import React, { useEffect, useState } from "react";
import getProfilePhoto from '../services/getProfilePhoto'

const PersonCard = ({ displayName, email, role, department, id, token }) => {
  
  const [photoUrl, setPhotoUrl] = useState(null);

  const url = window.URL || window.webkitURL;
  
  useEffect(() => {
    getProfilePhoto(id, token).then((blob) => {
      blob && (setPhotoUrl (url.createObjectURL(blob)));
    });
    return () => {
      url.revokeObjectURL(photoUrl);
    };
  }, []);

  return (
    <div className="card" key={id}>
      <div className="content">
        <div className="header">
          <div className="ui avatar image left floated">
            <img alt="" src={photoUrl}/>
          </div>
          <a href={`mailto:${email}`}>{displayName}</a>
        </div>
        <div className="meta">{role}</div>
        <div className="description">{department}</div>
      </div>
    </div>
  );
};

export default PersonCard;
