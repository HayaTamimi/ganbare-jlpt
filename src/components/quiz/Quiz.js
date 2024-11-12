import React, { useState, useEffect } from "react";
import "./Quiz.css";
import axios from "axios";
import Result from "../result/Result";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

export default function Quiz(props) {
  const {
    score,
    setScore,
    userData,
    setUserData,
    getUserData,
    onQuizCompletion
  } = props;

  const { quizId } = useParams();

  const urlquiz = `https://ganbare.onrender.com/api/v1/quizzes/${quizId}`;
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(urlquiz);
        const quizQuestions = response.data.questions;
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
    return (
      <div className="load">
        <ClipLoader color="rgba(255, 255, 255, 1)" />
      </div>
    );
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
    } else {
      // Call onQuizCompletion() when the last answer is submitted
      onQuizCompletion();
    }
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div className="container">
      {currentQuestion && (
        <div className="quiz">
          <h2>{currentQuestion.questionText}</h2>
          <div className="options">
            {currentQuestion.options.map((option) => (
              <h5
                key={option.id}
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
        <Result
          score={score}
          userData={userData}
        />
      )}
    </div>
  );
}
