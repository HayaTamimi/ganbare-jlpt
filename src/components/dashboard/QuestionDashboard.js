import React, { useState, useEffect } from "react";

import axios from "axios";
import {
  Button,
  Popover,
  TextField,
} from "@mui/material";
import CreateQItem from "./CreateQItem";

export default function QuizDashboard() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [questionInfo, setQuestionInfo] = useState({
    questionText: "",
    answer: "",
    quizId: "",
    level: "",
  });

  const handleChange = (event) => {
    setQuestionInfo({
      ...questionInfo,
      [event.target.name]: event.target.value,
    });
  };

  const createItem = () => {
    const token = localStorage.getItem("token");
    const url = "http://localhost:5171/api/v1/questions";

    axios
      .post(url, questionInfo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("Question created successfully!");
          fetchQuestions(); // Call fetchQuizzes to update the list
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to create question");
      });
  };

  const fetchQuestions = () => {
    const url = "http://localhost:5171/api/v1/questions";
    axios
      .get(url)
      .then((response) => {
        setQuestions(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch questions");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div>
      <h1>Question Dashboard</h1>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Create New Question
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <TextField
          name="questionText"
          label="Question Text"
          variant="standard"
          helperText="Enter the question"
          onChange={handleChange}
        />
        <br />
        <TextField
          name="answer"
          label="Answer"
          variant="standard"
          helperText="Enter the correct answer"
          onChange={handleChange}
        />

        <Button onClick={createItem}>Add Question</Button>
      </Popover>

      <h1>List of Questions</h1>
      <div>
        {questions.map((question) => (
          <CreateQItem
            key={question.id}
            question={question}
            fetchQuestions={fetchQuestions}
          />
        ))}
      </div>
    </div>
  );
}
