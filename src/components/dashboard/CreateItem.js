import React from "react";
import axios from "axios";

export default function CreateItem(props) {
  const { quiz, fetchQuizzes } = props;

  function deleteById() {
    const token = localStorage.getItem("token");
    const url = `http://localhost:5171/api/v1/quizzes/${quiz.id}`;
    axios
      .delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 204) {
          alert("Quiz is deleted successfully!");
          fetchQuizzes();
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <p> {quiz.qestionText}</p>
      <button onClick={deleteById}> Delete</button>
    </div>
  );
}
