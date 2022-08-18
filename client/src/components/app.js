import React from "react";
import {Routes, Route} from 'react-router-dom'
import "../style/app.css";
import OrgChart from "./OrgChart";
import OrgPerson from "./OrgPerson";


const App = () => {
  
  return (
    <div className="ui container">
      <Routes>
        <Route path="/" element={<OrgChart />}/>
        <Route path=":id" element={<OrgPerson />} />
      </Routes>
    </div>
  );
};

export default App;
