import React, { useState } from "react";
import "./UserLogin.css";
import axios from "axios";


export default function UserLogin() {
  const [userLogIn, setUserLogIn] = useState({
    email: "",
    password: "",
  });

  function onChangeHandlerEmailLogin(event) {
    setUserLogIn({ ...userLogIn, email: event.target.value });
  }

  function onChangeHandlerPasswordLogin(event) {
    setUserLogIn({ ...userLogIn, password: event.target.value });
  }

function logInUser() {
  const userUrlLogIn = "http://localhost:5171/api/v1/users/signIn";

  axios
    .post(userUrlLogIn, userLogIn)
    .then((res) => {
      console.log(res, "response from log in");
      if (res.status === 200) {
        localStorage.setItem("token", res.data);
      }
    })
    .catch((error) => console.log(error));
}


  return (
    <div className="container">
      <div className="login">
        <label htmlFor="email">Email:</label>

        <form>
          <input type="email" id="email" onChange={onChangeHandlerEmailLogin} />
        </form>
        <label htmlFor="password">Password:</label>

        <form>
          <input type="password" onChange={onChangeHandlerPasswordLogin} />
        </form>

        <button className="user-btn" onClick={logInUser}>
          Sign In
        </button>
      </div>
    </div>
  );
}
