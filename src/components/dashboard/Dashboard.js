import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dash">
        <ul>
          <li>
            <Link to="/users-dashboard">User Dashboard</Link>
          </li>
          <li>
            <Link to="/quizzes-dashboard">Quiz Dashboard</Link>
          </li>
          <li>
            <Link to="/questions-dashboard">Question Dashboard</Link>
          </li>
          {/* <li>
            <Link to="/options-dashboard">Option Dashboard</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
