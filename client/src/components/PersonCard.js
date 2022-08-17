import React, { useEffect, useState } from "react";
import getProfilePhoto from "../services/getProfilePhoto";
import { useGetTokenQuery } from "../services/authApi";


const PersonCard = ({ displayName, email, role, department, id }) => {
  const token = useGetTokenQuery().data;
  const [photoUrl, setPhotoUrl] = useState(null);
  const url = window.URL || window.webkitURL;

  useEffect(() => {
    getProfilePhoto(id, token).then((blob) => {
      blob && (setPhotoUrl (url.createObjectURL(blob)));
    });
    return () => {
      url.revokeObjectURL(photoUrl);
    };
  }, [photoUrl, id, token, url]);

  return (
    <div className="card" key={id}>
      <div className="content">
        <div className="header">
          <div className="ui avatar image left floated">
            <img src={photoUrl} alt="" />
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
