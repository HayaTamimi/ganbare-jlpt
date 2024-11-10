import React, { useState } from 'react'
import Quiz from '../components/quiz/Quiz'
import Leaderboard from './Leaderboard';

export default function QuizPage(props) {
  const { score, setScore, userData, setUserData, getUserData } = props;

  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const handleQuizCompletion = () => {
    setIsQuizCompleted(true);
  };

  return (
    <div>
      {isQuizCompleted ? (
        <Leaderboard />
      ) : (
        <Quiz
          onQuizCompletion={handleQuizCompletion}
          score={score}
          setScore={setScore}
          userData={userData}
          setUserData={setUserData}
          getUserData={getUserData}
        />
      )}
    </div>
  );
}

