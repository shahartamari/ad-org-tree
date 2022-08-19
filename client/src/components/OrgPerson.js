import React from "react";
import { useParams } from "react-router-dom";
import { useGetUserQuery } from "../services/graphApi";
import PersonCard from "./PersonCard";


const OrgPerson = ({ userId }) => {
  const { id } = useParams();

  const { data, isLoading, isSuccess, isError, error } = useGetUserQuery(
    userId || id
  );

  return (
    < >
   
      {isLoading && <div>Loading...</div>}
      {isError && <div className="negative">{error}</div>}
      {isSuccess && (
        <PersonCard
          mail={data.mail}
          displayName={data.displayName}
          role={data.jobTitle}
          department={data.department}
          id={data.id}
        />
      )}
   </>
  );
};

export default OrgPerson;
