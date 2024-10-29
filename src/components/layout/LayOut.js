import React from "react";
import NavBootstrap from "../navbar/NavBootsrap";
//import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

export default function LayOut() {
  return (
    <div>
      <NavBootstrap />
      <Outlet/>
     {/* <Footer /> */}
    </div>
  );
}
