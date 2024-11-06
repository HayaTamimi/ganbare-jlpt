import React, { useState, useEffect } from "react";
import "./LevelPage.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function LevelPage(props) {
  const [quizzes, setQuizzes] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5171/api/v1/quizzes"
        );
        setQuizzes(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleLevelClick = (level) => {
    setSelectedLevel(level); 
  };

  const filteredQuizzes = quizzes.filter(
    (quiz) => !selectedLevel || quiz.level === selectedLevel 
  );

  return (
    <div className="container-fluid">
      <div className="main">
        <div className="hero">
          <h3>Choose Your Level ✨</h3>
          <p className="mb-5">Only level N5 & N4 are available now</p>

          <div className="row d-flex justify-content-between">
            <div className="col-sm-5">
              <button
                className="btn-branding-easy"
                onClick={() => handleLevelClick("N5")}
              >
                N5
              </button>
            </div>
            <div className="col-sm-5 ">
              <button
                className="btn-branding-easy"
                onClick={() => handleLevelClick("N4")}
              >
                N4
              </button>
            </div>
            <div className="filtered-questions">
              <h2>{selectedLevel ? `Level ${selectedLevel} Quizzes` : ""}</h2>
              <div className="filtered-quizzes">
                {filteredQuizzes.map((quiz) => (
                  <div key={quiz.quizId}>
                    <Link to="/questions/quizId">
                      This Quiz from level: {quiz.level}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
