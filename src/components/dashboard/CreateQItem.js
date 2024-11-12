import React from "react";

import axios from "axios";
import { Button } from "@mui/material";

export default function CreateQItem(props) {
  const { question, fetchQuestions } = props;

  function deleteById() {
    const token = localStorage.getItem("token");
    const url = `https://ganbare.onrender.com/api/v1/questions/${question.id}`;
    axios
      .delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 204) {
          alert("a Question is deleted successfully!");
          fetchQuestions();
        }
      })
      .catch((error) => console.log(error));
  }


  return (
    <div>
      <p> {question.questionText}</p>
      <Button onClick={deleteById}> Delete</Button>
    </div>
  );
}
