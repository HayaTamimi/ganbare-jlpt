import React from "react";
import { Navigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

export default function ProtectedRoute(props) {
  const {
    isUserDataLoading,
    isAuthenticated,
    element,
    userData,
    shouldCheckAdmin,
  } = props;

  if (isUserDataLoading) {
    return (
      <div>
        {" "}
        <ClipLoader color="rgba(255, 255, 255, 1)" />
      </div>
    );
  }

  if (shouldCheckAdmin) {
    return isAuthenticated && userData.role === "Admin" ? (
      element
    ) : (
      <Navigate to="/signin" />
    );
  }

  return isAuthenticated ? element : <Navigate to="/signin" />;
}
