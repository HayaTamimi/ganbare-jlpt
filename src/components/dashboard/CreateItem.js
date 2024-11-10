import { Button } from "@mui/material";
import axios from "axios";
import React from "react";

export default function CreateItem(prop) {
  const { quiz, fetchQuizzes } = prop;

  function deleteById() {
    const token = localStorage.getItem("token");
    const url = `http://localhost:5171/api/v1/questions/${quiz.id}`;
    axios
      .delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 204) {
          alert("a product is deleted successfully!");
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