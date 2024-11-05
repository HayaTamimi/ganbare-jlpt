import React, { useState, useEffect } from "react";
import axios from "axios";
import "./QuizTake.css";
import Quiz from "./Quiz";

export default function QuizTake(props) {
  const { level } = props; // Assuming you receive the level prop directly

  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5171/api/v1/quizzes/?level=${level}`
        );
        setQuizzes(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 
    
  return (
    <div className="filtered-questions">
      <div className="filtered-quizzes">
        {quizzes.map((quiz) => (
          <div key={quiz.quizId}>
        this is from quiz {quiz.questions} 
          </div>
        ))}
      </div>
    </div>
  );
}
