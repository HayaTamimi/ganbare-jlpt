import React, { useState, useEffect } from "react";
import axios from "axios";
// import {
//   Button,
//   Popover,
//   TextField,
//   InputLabel,
//   MenuItem,
//   FormControl,
//   Select,
// } from "@mui/material";

// import QuestionSet from "./QuestionSet";

export default function Questionsboard() {
  const [questionResponse, setQuestionResponse] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function fetchData() {
    let url = "http://localhost:5171/api/v1/questions";
    axios
      .get(url)
      .then((response) => {
        questionResponse(response.data);
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

  console.log(questionResponse);

//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const open = Boolean(anchorEl);
//   const id = open ? "simple-popover" : undefined;

//   const [optionList, setOptionList] = useState([]);

//   function fetchOption() {
//     let url = "http://localhost:5171/api/v1/options";
//     axios
//       .get(url)
//       .then((response) => {
//         setOptionList(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   useEffect(() => {
//     fetchOption();
//   }, []);

//   const [questionInfo, setQuestionInfo] = useState({
//     questionText: "",
//     anwser: "",
//     optionId: "",
//   });
//   function onChangeHandler(event) {
//     console.log(event, "event");
//     setQuestionInfo({
//       ...questionInfo,
//       [event.target.id]: event.target.value,
//       [event.target.questionText]: event.target.value,
//     });
//   }

  if (loading) {
    return <div> </div>;
  }

  if (error) {
    return <div> {error.message}</div>;
  }

  //console.log(questionInfo, "info");

//   function createQuestion() {
//     const token = localStorage.getItem("token");
//     const url = "http://localhost:5171/api/v1/questions";
//     // send
//     axios
//       .post(url, questionInfo, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((res) => {
//         console.log(res);
//         if (res.status === 200) {
//           alert("Question is created successfully ");
//           fetchData();
//         }
//       })
//       .catch((error) => console.log(error));
//   }
  return (
    <div>
      <h1> Question Dashboard </h1>
      {/* <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Create new Question
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
          name="question"
          label="Question"
          variant="standard"
          helperText="please enter the Question text"
          onChange={onChangeHandler}
        />
        <br />
        <TextField
          name="anwser"
          label="Anwer"
          variant="standard"
          helperText="please enter the correct anwser "
          onChange={onChangeHandler}
        />

        <br />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Options id</InputLabel>
          <Select
            labelId="optionId"
            name="optionId"
            value={questionInfo.optionId}
            label="Category Id"
            onChange={onChangeHandler}
          >
            {optionList.map((category) => {
              return (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <Button onClick={createQuestion}> Add Question</Button>
      </Popover>

      <h1> List of Questions</h1>
      <div>
        {setQuestionResponse.questions.map((question) => {
          return (
            <QuestionSet
              key={question.id}
              question={question}
              fetchData={fetchData}
            />
          );
        })}
      </div> */}
    </div>
  );
}
