import React, { useState } from "react";
import "./UserLogin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UserLogin(props) {
  const { getUserData } = props;

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

  const navigate = useNavigate();

  function logInUser() {
    const userUrlLogIn = "https://ganbare.onrender.com/api/v1/users/signin";

    axios
      .post(userUrlLogIn, userLogIn)
      .then((res) => {
        console.log(res, "response from log in");
        if (res.status === 200) {
          localStorage.setItem("token", res.data);
        }
      })
      .then(() => getUserData())
      .then(() => navigate("/profile"))
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
          alert("We do not have account with this email address");
        }
      });
  }

  return (
    <div className="container">
      <div className="login">
        <label htmlFor="email">Email:</label>

        <form>
          <input type="email" onChange={onChangeHandlerEmailLogin} />
        </form>
        <label htmlFor="password">Password:</label>

        <form>
          <input type="password" onChange={onChangeHandlerPasswordLogin} />
        </form>

        <button className="user-btn" onClick={logInUser}>
          Sign In
        </button>
        <div>
          <h3 className="memo">
            Don't have account?
            <br />
            <a href={"/signup"}> → Sign up</a>
          </h3>
        </div>
      </div>
    </div>
  );
}
