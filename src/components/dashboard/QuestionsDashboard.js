import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Questionsboard.css";


export default function Questionsboard() {
  const [questionResponse, setQuestionResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function fetchData() {
    let url = "http://localhost:5171/api/v1/questions";

    axios
      .get(url)
      .then((response) => {
        setQuestionResponse(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed");
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);


  if (loading) {
    return <div> </div>;
  }

  if (error) {
    return <div> {error.message}</div>;
  }

  console.log(questionResponse);
  
return (
  <div className="container-fluid">
    <h2 className="dashboard-title"> Question Dashboard </h2>
    {questionResponse.map((question) => (
      <div className="part" key={question.questionId}>
        <h4 className="q-text">Q:{question.questionText}</h4>
        <h4 className="q-ans">Correct Answer: {question.answer}</h4>
        <h4 className="q-ops">
          {question.options.map((option) => (
            <div key={option.optionId}>
              <h4 className="q-ops">Options: {option.choice}</h4>
            </div>
          ))}
        </h4>
      </div>
    ))}
  </div>
);
}
