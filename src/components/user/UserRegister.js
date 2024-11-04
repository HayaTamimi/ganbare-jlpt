import React, { useState } from "react";
import "./UserRegister.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UserRegister() {
  const [userInformation, setUserInformation] = useState({
    username: "",
    email: "",
    password: "",
  });

  function onChangeHandlerUsername(event) {
    setUserInformation({ ...userInformation, username: event.target.value });
  }

  function onChangeHandlerEmail(event) {
    setUserInformation({ ...userInformation, email: event.target.value });
  }

  function onChangeHandlerPassword(event) {
    setUserInformation({ ...userInformation, password: event.target.value });
  }

  //console.log(userInformation, "user");

  const navigate = useNavigate();

  function registerNewUser() {
    const userUrl = "http://localhost:5171/api/v1/users/signup";

    axios
      .post(userUrl, userInformation)
      .then((res) => {
        if (res.status === 200) {
          navigate("/signin");
        }
      })
      .catch((err) => {
        if (err.status === 400) {
          if (err.response.data.errors.Username) {
            alert(err.response.data.errors.Username[0]);
            return;
          }
          if (err.response.data.errors.Email) {
            alert(err.response.data.errors.Email[0]);
            return;
          }
          if (err.response.data.errors.Password) {
            alert(err.response.data.errors.Password[0]);
            return;
          }
        }
      });
  }

  // will delete later
  //password: 123456789Aa*
  //email: "dgsgs@hotmail.com";
  //userId: "ffada2e4-7466-489d-94d4-081b41562b2a";
  //username: "Hayass";

  return (
    <div className="container">
      <div className="user-register">
        <label htmlFor="usename">Username: </label>
        <form>
          <input type="text" id="username" onChange={onChangeHandlerUsername} />
        </form>
        <label htmlFor="email">Email:</label>

        <form>
          <input type="email" id="email" onChange={onChangeHandlerEmail} />
        </form>
        <label htmlFor="password">Password:</label>

        <form>
          <input type="password" onChange={onChangeHandlerPassword} />
        </form>

        <button className="user-btn" onClick={registerNewUser}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
