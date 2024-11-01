import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

export default function Main() {
  
  return (
    <div className="container">
      <div className="main">
        <div className="hero">
          <p className="ganbare mt-5 mb-2">ガンバレ！</p>
          <h1 className="mb-5">
            <span className="main-title">Ganbare JLPT</span> is a web app to
            help you pass but only if you did your best ✨
          </h1>
          <div>
            <Link to="/quiz/levels" className="btn-branding">
              Take Quiz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
