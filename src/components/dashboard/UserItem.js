import React from "react";
import axios from "axios";
import { Button } from "@mui/material";

export default function UserItem(prop) {
  const { user, fetchUserList } = prop;

  function deleteUser() {
    const token = localStorage.getItem("token");
    axios
      .delete(`https://ganbare.onrender.com/v1/users/${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("A user is deleted");
          fetchUserList();
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <p> Email: {user.email}</p>
      <p> Role: {user.role}</p>
      <Button onClick={deleteUser}> Delete </Button>
    </div>
  );
}
