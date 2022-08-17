import React from "react";
import PersonCard from "./PersonCard";
import { useGetUsersQuery } from "../services/graphApi";

const OrgChart = () => {
  const { data, isSuccess, isError, error, isLoading } = useGetUsersQuery();

  return (
    <div className="ui cards">
      {isLoading && <div> loading... </div>}
      {isError && <div className="negative">{error}</div>}
      {isSuccess &&
        data.map(({ displayName, department, jobTitle, mail, id }) => {
          return (
            <React.Fragment key={id}>
            <PersonCard
              id={id}
              displayName={displayName}
              email={mail || null}
              department={department}
              role={jobTitle}
            />
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default OrgChart;
