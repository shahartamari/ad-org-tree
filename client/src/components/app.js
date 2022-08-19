import React from "react";
import { Routes, Route } from "react-router-dom";
import "../style/app.css";
import OrgChart from "./OrgChart";
import PersonTree from "./PersonTree";
import Home from "./Home";
import OrgPerson from "./OrgPerson";

const App = () => {
  return (
    <div className="ui container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="chart" element={<OrgChart />} />
        <Route path=":id" element={<PersonTree />} />
        <Route path="Org/:id" element ={<OrgPerson />} />
      </Routes>
    </div>
  );
};

export default App;
