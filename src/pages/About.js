import React from "react";
import "./About.css";
import Quiz from "../components/quiz/Quiz";


export default function About(props) {

  return (
    <div className="container">
      <div>
        <p className="about"> testing page for now</p>

        <Quiz/>
      </div>
    </div>
  );
}
