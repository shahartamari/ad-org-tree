import React from "react";
import { Routes, Route } from "react-router-dom";
import "../style/app.css";
import OrgChart from "./OrgChart";
import OrgPerson from "./OrgPerson";
import Home from "./Home";

const App = () => {
  return (
    <div className="ui container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="chart" element={<OrgChart />} />
        <Route path=":id" element={<OrgPerson />} />
      </Routes>
    </div>
  );
};

export default App;
