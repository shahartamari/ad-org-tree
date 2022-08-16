import React from "react";
import { useGetProfilePhotoQuery } from "../services/graphApi";

const PersonCard = ({ displayName, email, role, department, id }) => {
  const photoUrl = useGetProfilePhotoQuery(id);
  

  return (
    <div className="card" key={id}>
      <div className="content">
        <div className="header">
          <div className="ui avatar image left floated">
            <img src={photoUrl} />
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
