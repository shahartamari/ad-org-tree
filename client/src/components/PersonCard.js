import React, { useEffect, useState } from "react";
import getProfilePhoto from '../services/getProfilePhoto'

const PersonCard = ({ displayName, email, role, department, id, token }) => {
  
  const [photoUrl, setPhotoUrl] = useState(null);

  const url = window.URL || window.webkitURL;
  
  useEffect(() => {
    getProfilePhoto(id, token).then((blob) => {
      if (blob) {
        setPhotoUrl (url.createObjectURL(blob));
      } else {
        setPhotoUrl('/avatar.png')
      }
     
    });
    return () => {
      url.revokeObjectURL(photoUrl);
    };
  }, []);

  return (
    <div className="ui card" key={id}>
      <div className="content">
        <div className="header">
          <div className="left floated ui avatar image">
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
