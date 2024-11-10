import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Result(props) {
  const { score, userData } = props;

  const userId = userData.userId ;

  const saveResult = async (score, token, userId) => {
    try {
      const response = await axios.put(
        `http://localhost:5171/api/v1/quizzes/${userId}`,
        {
          score,
          userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Quiz result saved successfully:", response.data);
    } catch (error) {
      console.error("Error saving quiz result:", error);
    }
  };

  useEffect(() => {
    if (score && userId) {
      const token = localStorage.getItem("token");
      saveResult(score, token, userId);
    }
  }, [score, userId]);


  return (
    <div className="resultCon">
      <div className="score">
        <h4>Your Score: {score}/10</h4>
        {/* <button className="rest" onClick={() => window.location.reload()}>
          Rest
        </button> */}
      </div>
    </div>
  );
}
