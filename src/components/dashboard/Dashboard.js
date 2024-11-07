import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="container">
      <div className="dashboard">
        <h3> Main Admin Page</h3>
        <div className="link-dashboard">
          <Link className="user-link" to="/users-dashboard">
            User Dashboard
          </Link>
          <br />
          <Link className="quiz-link" to="/quizzes-dashboard">
            Quiz Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
