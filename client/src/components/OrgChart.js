import React from "react";
import PersonCard from "./PersonCard";

const OrgChart = ({ data, isSuccess, isError, error, isLoading }) => {
  
  return (
    <div className="ui cards">
      {isLoading && <div> loading... </div>}
      {isError && <div className="negative">{error}</div>}
      {isSuccess &&
        data.map((user) => {
          return (
            <React.Fragment key={user.id}>
              <PersonCard
                mail={user.mail}
                displayName={user.displayName}
                role={user.jobTitle}
                department={user.department}
                id={user.id}
                manager={user.manager}
              />
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default OrgChart;
