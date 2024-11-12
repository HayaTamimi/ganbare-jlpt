import React from "react";

import axios from "axios";
import { Button } from "@mui/material";

export default function CreateItem(props) {
  const { quiz, fetchQuizzes } = props;

  function deleteById() {
    const token = localStorage.getItem("token");
    const url = `https://ganbare.onrender.com/api/v1/questions/${quiz.id}`;
    axios
      .delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 204) {
          alert("The quiz is deleted successfully!");
          fetchQuizzes();
        }
      })
      .catch((error) => console.log(error));
  }

  console.log(quiz);
  return (
    <div>
      <p> {quiz.level}</p>
      <Button onClick={deleteById}> Delete</Button>
    </div>
  );
}
