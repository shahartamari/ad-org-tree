import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useGetPhotoMutation } from "../services/graphApi";

const PersonCard = ({ displayName, mail, jobTitle, department, id }) => {
  const [photoUrl, setPhotoUrl] = useState(null);
  const [getPhoto] = useGetPhotoMutation(id);
  const nav = useNavigate();

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
        <button className="ui button right floated small icon" onClick={()=>{nav(`/Org/${id}`)}}>
          <i className="icon users"></i>
        </button>
        <div>
          <div className="left floated ui avatar image">
            <img alt="" src={photoUrl} />
          </div>
          <div>
            <h4 className="ui header">
              <NavLink className="" to={`/${id}`}>
                {displayName}
              </NavLink>
              <div className="meta">{jobTitle}</div>
            </h4>
          </div>
        </div>

        <div className="description">{department}</div>
      </div>
    </div>
  );
};

export default PersonCard;
