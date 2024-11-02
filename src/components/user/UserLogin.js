import React from "react";
import "./UserLogin.css";


export default function UserLogin() {
  return (
    <div className="container">
      <div className="login">
        <label htmlFor="email">Email:</label>

        <form>
          <input
            type="email"
            id="email"
            //  onChange={onChangeHandlerEmail}
          />
        </form>
        <label htmlFor="password">Password:</label>

        <form>
          <input
            type="password"
            // onChange={onChangeHandlerPassword}
          />
        </form>

        <button
          className="user-btn"
          //  onClick={registerNewUser}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
