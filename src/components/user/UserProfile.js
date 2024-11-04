import React, { useState } from "react";
import axios from "axios";
import "./UserProfile.css";

export default function UserProfile(props) {
  const { userData, setUserData } = props;
  const [newUsername, setNewUsername] = useState("");
  const [isOpen, setIsOpen] = useState(false); 

  const handleClick = () => {
    setIsOpen(!isOpen); 
  };

  const updateUserProfile = () => {
    const token = localStorage.getItem("token");

    axios
      .patch(
        `http://localhost:5171/api/v1/users/${userData.id}`,
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
      })
      .catch((error) => console.log(error));
  };

  const logOutHandler = () => {
    localStorage.removeItem("token");
    setUserData(null);
  };

  return (
    <div className="user-profile">
      <h2 className="hello">
        Glad to have you here, {userData.username} 🇯🇵✨
        <br />
        Let's try our best to achieve our goals!
      </h2>
      <div className="user-edit">
        <button onClick={handleClick}>Edit</button>
        <button onClick={logOutHandler}>Log out</button>

        {isOpen && ( 
          <div className="popover">
            <input
              type="text"
              placeholder="Username"
              value={newUsername}
              onChange={(event) => setNewUsername(event.target.value)}
            />
            <button onClick={updateUserProfile}>Edit</button>
          </div>
        )}
      </div>
    </div>
  );
}
