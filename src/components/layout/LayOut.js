import React from "react";
import NavBootstrap from "../navbar/NavBootsrap";
//import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

export default function LayOut(props) {
  const { isAuthenticated } = props;
  return (
    <div>
      <NavBootstrap isAuthenticated={isAuthenticated} />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}
