import React from "react";
import PersonCard from "./PersonCard";
import { useGetUsersQuery } from "../services/graphApi";

const OrgChart = () => {
  const { data, isSuccess, isError, error, isLoading } = useGetUsersQuery();

  return (
    <div className="ui cards">
      {isLoading && <div> loading... </div>}
      {isSuccess &&
        data.map(({ displayName, department, jobTitle, mail, id }) => (
          <PersonCard
            id={id}
            displayName={displayName}
            email={mail}
            department={department}
            role={jobTitle}
          />
        ))}
    </div>
  );
};

export default OrgChart;