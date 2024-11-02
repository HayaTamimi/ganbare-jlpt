import React from "react";
import { useState, useEffect } from "react";
import "./Quiz.css";
import axios from "axios";

export default function Quiz() {
  // let urlQuestions = "http://localhost:5171/api/v1/questions";
  // let urlOptions = "http://localhost:5171/api/v1/options";
  let urlQuiz =
    "http://localhost:5171/api/v1/quizzes/";

  let [response, setResponse] = useState({});
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);
          console.log(response.data);

  useEffect(() => {
    function getData() {
      axios
        .get(urlQuiz)
        .then((response) => {
          console.log(response.data);
          setResponse(response.data);
          setLoad(false);
        })
        .catch((error) => {
          setError("there is error");
          setLoad(false);
        });
    }
    getData();
  }, []);

  if (load) {
    return <div> </div>;
  }

  if (error) {
    return <div> {error.message}</div>;
  }


            console.log(response.data);

  // let [question, setQuestion] = useState({});
  // let [option, setOption] = useState([]);
  // const [load, setLoad] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const getData = async () => {
  //     setLoad(true);
  //     setError(null);

  //     try {
  //       const questionResponse = await axios.get(
  //         "http://localhost:5171/api/v1/questions"
  //       );
  //       setQuestion(questionResponse.data);

  //       const optionsResponse = await axios.get(
  //         "http://localhost:5171/api/v1/options"
  //       );
  //       setOption(optionsResponse.data);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoad(false);
  //     }
  //   };

  //   getData();
  // }, []);

  // if (load) {
  //   return <div></div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  //console.log(question[0].questionText);

  return (
    <div className="container">
      <div className="quiz">
        {/* <h2>{question[0].questionText}</h2> */}
        {/* <div className="options">
          {option.slice(0, 4).map((option) => (
            <h5 key={option.optionId}>{option.choice}</h5>
          ))}
        </div> */}
        <button>Next</button>
        <div className="pages">1 of 10 questions</div>
      </div>
    </div>
  );
}
