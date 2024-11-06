import React from "react";
import { Link } from "react-router-dom";
import QuestionsDashboard from "./QuestionsDashboard";

export default function Dashboard() {
  return (
    <div>
      <div>
        <h2 > Main Admin Page</h2>
        {/* <UserDashboard /> */}
        {/* <QuizzesDashboard /> */}
        {/* <OptionsDashboard /> */}

        <QuestionsDashboard />

        <Link to="/users-dashboard"> Users</Link>
        <Link to="/quizzes-dashboard"> Quizzes</Link>
        <Link to="/questions-dashboard"> Questions</Link>
        <Link to="/options-dashboard"> Options</Link>
      </div>
    </div>
  );
}
