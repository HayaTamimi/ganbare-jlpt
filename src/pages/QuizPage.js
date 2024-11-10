import React from 'react'
import Quiz from '../components/quiz/Quiz'

export default function QuizPage(props) {
  const { score, setScore, userData, setUserData, getUserData } = props;
  return (
    <div>
      <Quiz
        score={score}
        setScore={setScore}
        userData={userData}
        setUserData={setUserData}
        getUserData={getUserData}
      />
    </div>
  );
}

