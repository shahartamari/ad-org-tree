import React from "react";
import PersonCard from "./PersonCard";
import { useGetUsersQuery } from "../services/graphApi";
import { useGetTokenQuery } from "../services/authApi";

const OrgChart = () => {
  const { data, isSuccess, isError, error, isLoading } = useGetUsersQuery();
  const token = useGetTokenQuery().data;

  return (
    <div className="ui cards">
      {isLoading && <div> loading... </div>}
      {isError && <div className="negative">{error}</div>}
      {isSuccess &&
        data.map(({ displayName, department, jobTitle, mail, id }) => {

          return (
            <PersonCard
              id={id}
              displayName={displayName}
              email={mail || null}
              department={department}
              role={jobTitle}
              token={token}
 
            />
          );
        })}
    </div>
  );
};

export default OrgChart;
