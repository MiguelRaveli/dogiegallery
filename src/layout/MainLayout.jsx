import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import BackTopButton from "../components/BackTopButton";
import Footer from "../components/Footer";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
      {/* <BackTopButton /> */}
    </>
  );
};

export default MainLayout;
