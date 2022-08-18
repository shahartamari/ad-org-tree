import React, { useEffect, useState } from "react";
import { useGetPhotoMutation } from "../services/graphApi";

const PersonCard = ({ displayName, mail, role, department, id }) => {
  const [photoUrl, setPhotoUrl] = useState(null);
  const [getPhoto] = useGetPhotoMutation(id);

  useEffect(() => {
    getPhoto(id).then(({ data, error }) => {
      if (error) {
        setPhotoUrl("./avatar.png");
      } else {
        setPhotoUrl(data);
      }
    });

    return () => {
      URL.revokeObjectURL(photoUrl);
    };
  }, []);

  return (
    <div className="ui card" key={id}>
      <div className="content">
        <div className="header">
          <div className="left floated ui avatar image">
            <img alt="" src={photoUrl} />
          </div>
        <a>{displayName}</a>
         <a>{mail}</a> 
          
        </div>
        <div className="meta">{role}</div>
        <div className="description">{department}</div>
      </div>
    </div>
  );
};

export default PersonCard;
