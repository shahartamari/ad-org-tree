import React from "react";
import { useParams } from "react-router-dom";
import { useGetUserQuery } from "../services/graphApi";
import PersonCard from "./PersonCard";

const Hierarchy = ({ data }) => {
  return (
    <div class="person">
      {data.manager && <Hierarchy data={data.manager} />}
      <PersonCard {...data} />
    </div>
  );
};
const PersonTree = () => {
  const { id } = useParams();
  const { data, error, isSuccess, isError } = useGetUserQuery(id);
  return (
    <div className="org-chart">
      {isError && <div className="negative">{error}</div>}
      {isSuccess && <Hierarchy data={data} />}
    </div>
  );
};

export default PersonTree;
