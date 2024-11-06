import React from "react";
import NavBootstrap from "../navbar/NavBootsrap";
//import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

export default function LayOut(props) {
  const { isAuthenticated, userData } = props;
  return (
    <div>
      <NavBootstrap userData={userData} isAuthenticated={isAuthenticated} />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}
