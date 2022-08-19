import React from "react";
import { useGetDirectReportsQuery } from "../services/graphApi";
import PersonCard from "./PersonCard";

const Hierarchy = ({ data }) => {
  return (
    <>
      {data.map((user) => (
        <li className="person" key={user.id}>
          <PersonCard {...user} />
        </li>
      ))}
    </>
  );
};
const DirectReports = ({ id }) => {
  const { data, error, isSuccess, isError } = useGetDirectReportsQuery(id);

  return (
    <div>
      {isError && <div className="negaive">{error}</div>}
      {isSuccess && <Hierarchy data={data} />}
    </div>
  );
};

export default DirectReports;
