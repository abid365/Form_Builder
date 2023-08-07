import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "../../Components";

const Main = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
