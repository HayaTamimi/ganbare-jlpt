import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Popover,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import CreateItem from "./CreateItem";


export default function QuizDashboard() {
  const [quizzes, setQuizzes] = useState([]);
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
          fetchQuizzes(); // Call fetchQuizzes to update the list
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to create question");
      });
  };

  const fetchQuizzes = () => {
    const url = "http://localhost:5171/api/v1/quizzes";
    axios
      .get(url)
      .then((response) => {
        setQuizzes(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch quizzes");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  return (
    <div>
      <h1>Quiz Dashboard</h1>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Create New Quiz
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
        <br />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select Level</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={questionInfo.level}
            onChange={(event) =>
              setQuestionInfo({ ...questionInfo, level: event.target.value })
            }
          >
            <MenuItem key="n5" value="N5">
              N5
            </MenuItem>
            <MenuItem key="n4" value="N4">
              N4
            </MenuItem>
          </Select>
        </FormControl>
        <Button onClick={createItem}>Add Question</Button>
      </Popover>

      <h1>List of Quizzes</h1>
      <div>
        {quizzes.map((quiz) => (
          <CreateItem key={quiz.id} quiz={quiz} fetchQuizzes={fetchQuizzes} />
        ))}
      </div>
    </div>
  );
}
