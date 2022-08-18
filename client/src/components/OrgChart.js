import React from "react";
import OrgPerson from "./OrgPerson";

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
              <OrgPerson userId={id} />
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default OrgChart;
