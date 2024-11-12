import React, { useState } from "react";
import axios from "axios";
import "./UserProfile.css";

export default function UserProfile(props) {
  const { userData, setUserData, getUserData } = props;

  const [newUsername, setNewUsername] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const updateUserProfile = () => {
    const token = localStorage.getItem("token");

    axios
      .patch(
        `https://ganbare.onrender.com/api/v1/users/${userData.userId}`,
        {
          username: newUsername,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setUserData(res.data);
        getUserData();
      })
      .catch((error) => console.log(error));
  };

  const logOutHandler = () => {
    localStorage.removeItem("token");
    setUserData(null);
  };


  console.log(userData)
  return (
    <div className="user-profile">
      <h2 className="hello">
        Glad to have you here, {userData.username} 🇯🇵✨
        <br />
        Let's try our best to achieve our goals!
      </h2>
      <div className="user-edit">
        <button className="user-btn" onClick={logOutHandler}>
          Log out
        </button>
        <button className="user-btn" onClick={handleClick}>
          Change Username
        </button>
        <p>
          this name will be showen in the leaderboad
          <br />
          so choose carefully!
        </p>

        {isOpen && (
          <div className="popover">
            <input
              type="text"
              placeholder="Username"
              value={newUsername}
              onChange={(event) => setNewUsername(event.target.value)}
            />
            <button className="name-update-btn" onClick={updateUserProfile}>
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
