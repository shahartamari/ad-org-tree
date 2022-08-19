import React from "react";
import { useParams } from "react-router-dom";
import { useGetUserQuery } from "../services/graphApi";
import DirectReports from "./DirectReports";
import PersonCard from "./PersonCard";

const OrgPerson = ({ userId }) => {
  const { id } = useParams();

  const { data, isLoading, isSuccess, isError, error } = useGetUserQuery(
    userId || id
  );

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div className="negative">{error}</div>}
      {isSuccess && (
        <>
          <li>
            <PersonCard {...data} />
          </li>
          <DirectReports id={id} />
        </>
      )}
    </>
  );
};

export default OrgPerson;
