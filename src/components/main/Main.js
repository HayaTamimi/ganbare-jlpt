import React from "react";
import "./Main.css";

export default function Main() {
  
  return (
    <div className="main">
      <div className="hero">
        <p className="ganbare mt-5 mb-2">ガンバレ！</p>
        <h1 className="mb-5">
          <span className="main-title">Ganbare JLPT</span> is a web app to help
          you pass but only if you did your best ✨
        </h1>
        <div>
          <button className="btn-branding">Take Quiz</button>
        </div>
      </div>
    </div>
  );
}
