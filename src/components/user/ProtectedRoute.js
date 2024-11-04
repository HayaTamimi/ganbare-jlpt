import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute(props) {
  const {
    isUserDataLoading,
    isAuthenticated,
    element,
    userData,
    shouldCheckAdmin,
  } = props;

  if (isUserDataLoading) {
    return <div></div>;
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
