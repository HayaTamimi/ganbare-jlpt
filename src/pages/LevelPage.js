import React, { useState } from "react";
import "./LevelPage.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import QuizTake from "../components/quiz/QuizTake"


export default function LevelPage(props) {

  const { response, setResponse } = props;
  
    const navigate = useNavigate();

    const handleLevelSelect = (level) => {
      navigate(`/quizzes/?level=${level}`);
    };
  
  return (
    <div className="continer">
      <div className="main">
        <div className="hero">
          <h3 >Choose Your Level ✨</h3>
          <p className="mb-5">Only level N5 & N4 available now </p>

          <div className="row d-flex justify-content-between">
            <div className="col-sm-5">
              <div
                className="btn-branding-easy"
                response={response}
                setResponse={setResponse}
                onClick={() => handleLevelSelect("N5")}
              >
                N5
              </div>
            </div>
            <div className="col-sm-5 ">
              <div
                className="btn-branding-easy"
                response={response}
                setResponse={setResponse}
                onClick={() => handleLevelSelect("N4")}
              >
                N4
              </div>
            </div>
            {/* <div className="col-sm-2">
              <Link
                to="#"
                className="btn-branding-unvalid"
                response={response}
                setResponse={setResponse}
              >
                N3
              </Link>
            </div>
            <div className="col-sm-2">
              <Link
                to="#"
                className="btn-branding-unvalid"
                response={response}
                setResponse={setResponse}
              >
                N2
              </Link>
            </div>
            <div className="col-sm-3">
              <Link
                to="#"
                className="btn-branding-unvalid"
                response={response}
                setResponse={setResponse}
              >
                N1
              </Link>
            </div> */}
          </div>
          <QuizTake response={response} />
        </div>
      </div>
    </div>
  );
}
