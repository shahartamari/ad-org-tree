import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
        <div className="">
          <div className="left floated ui avatar image">
            <img alt="" src={photoUrl} />
          </div>
          <div>
            <h4 className="ui header">
              <NavLink className="" to={id}>
                {displayName}
              </NavLink>
              <div className="meta">{role}</div>
            </h4>
          </div>
        </div>

        <div className="description">{department}</div>
      </div>
    </div>
  );
};

export default PersonCard;
