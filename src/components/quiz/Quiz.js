import React, { useState, useEffect } from "react";
import "./Quiz.css";
import axios from "axios";
import Result from "../result/Result"

export default function Quiz() {
  const urlQuestions = "http://localhost:5171/api/v1/questions";
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(urlQuestions);
        setQuestions(response.data);
        setIsLoading(false);
      } catch (error) {
        setError("Error fetching questions");
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="load"></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div className="container">
      {currentQuestion && (
        <div className="quiz">
          <h2>{currentQuestion.questionText}</h2>
          <div className="options">
            {currentQuestion.options.map((option, index) => (
              <h5
                key={index}
                onClick={() => handleAnswerClick(option.isCorrect)}
              >
                {option.choice}
              </h5>
            ))}
          </div>
          <div className="pages">
            Question {currentIndex + 1} of {questions.length}
          </div>
        </div>
      )}

      {currentIndex === questions.length - 1 && (
        <Result score={ score} />
      )}
     
    </div>
  );
}