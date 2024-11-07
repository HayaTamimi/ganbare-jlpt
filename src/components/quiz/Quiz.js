import React, { useState, useEffect } from "react";
import "./Quiz.css";
import axios from "axios";
import Result from "../result/Result";
import { useParams } from "react-router-dom";

export default function Quiz() {
  const { quizId } = useParams();

  const urlquiz = `http://localhost:5171/api/v1/quizzes/${quizId}`;
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(urlquiz);
        const quizQuestions = response.data.questions;
        console.log(response.data.questions[1]);
        setQuestions(quizQuestions);
        setIsLoading(false);
      } catch (error) {
        setError("Error fetching quiz");
        setIsLoading(false);
      }
    };

    fetchData();
  }, [quizId]);

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

      {currentIndex === questions.length - 1 && <Result score={score} />}
    </div>
  );
}
// "quizId": "53af0cce-ef80-4ddd-920f-9ecab0dc6865",
//   "quizScore": 0,
//   "timeTaken": 0,
//   "questions": [
//       {
//           "questionId": "2f92ce7f-9753-41c0-988b-50e0a250ba51",
//           "questionText": "（一日） で このほんを よみました。",
//           "answer": "いちにち",
//           "options": null,
//           "quizId": "53af0cce-ef80-4ddd-920f-9ecab0dc6865"
//       }
