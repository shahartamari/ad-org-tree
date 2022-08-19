import React from "react";
import PersonCard from "./PersonCard";

const OrgChart = ({ data, isSuccess, isError, error, isLoading }) => {

  return (
    <div className="ui cards org-chart">
      {isLoading && <div> loading... </div>}
      {isError && <div className="negative">{error}</div>}
      {isSuccess &&
        data.map((user) => {
          return (
            <React.Fragment key={user.id}>
              <PersonCard {...user}
              />
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default OrgChart;
