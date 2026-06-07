import React from "react";
import Aheader from "../Acomman/Aheader";

function Dashboard() {
  const adminName = localStorage.getItem("Aname");

  return (
    <div>
      <Aheader/>

      <div className="container mt-5 text-center">
        <h1>Dashboard</h1>
        <h2>Hello, {adminName} 👋</h2>
      </div>
    </div>
  );
}

export default Dashboard;