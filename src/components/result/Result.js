import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Result(props) {
  const { score, userData } = props;

  const userId = userData?.userId; 

  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null);  

  const saveResult = async (score, token, userId) => {
    setIsLoading(true); 
    setError(null); 
    try {
      const response = await axios.put(
        `https://ganbare.onrender.com/api/v1/users/${userId}`,
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
      setIsLoading(false); 
    } catch (error) {
      console.error("Error saving quiz result:", error);
      setIsLoading(false); 
      setError(error.message || "An error occurred while saving the result.");
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
      </div>
    </div>
  );
}
